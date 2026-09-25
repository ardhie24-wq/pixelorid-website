# Jalankan dari root project: D:\WEBSITE PIXELORID\pixelorid-website
# Script ini scan SEMUA file .tsx dan .ts di folder app/ dan components/,
# lalu otomatis perbaiki karakter aneh (mojibake) yang muncul dari salah
# encoding (UTF-8 dibaca/ditulis sebagai Windows-1252).
#
# Aman: file yang TIDAK ada karakter aneh tidak akan disentuh sama sekali.

$folders = @("app", "components", "src") | Where-Object { Test-Path $_ }

if ($folders.Count -eq 0) {
    Write-Host "Tidak menemukan folder app/components/src. Jalankan script ini dari root project." -ForegroundColor Red
    exit
}

$files = Get-ChildItem -Path $folders -Recurse -Include *.tsx, *.ts -File

# Bangun tanda mojibake pakai kode karakter (hindari karakter aneh langsung di source)
$marker1 = [string]([char]0x00E2) + [string]([char]0x20AC)   # "a-circumflex" + "euro sign" combo = start of most mojibake
$marker2 = [string]([char]0x00C3)                              # "A with tilde" = start of the other common mojibake pattern
$markers = @($marker1, $marker2)

$fixedCount = 0
$checkedCount = 0

foreach ($file in $files) {
    $checkedCount++
    $raw = Get-Content -Path $file.FullName -Raw -Encoding UTF8

    if ([string]::IsNullOrEmpty($raw)) { continue }

    $hasMojibake = $false
    foreach ($m in $markers) {
        if ($raw.Contains($m)) { $hasMojibake = $true; break }
    }

    if (-not $hasMojibake) { continue }

    # Reverse double-encoding: treat string as Windows-1252 bytes, re-decode as UTF-8
    $bytes = [System.Text.Encoding]::GetEncoding(1252).GetBytes($raw)
    $fixedText = [System.Text.Encoding]::UTF8.GetString($bytes)

    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($file.FullName, $fixedText, $utf8NoBom)

    $relativePath = $file.FullName.Replace((Get-Location).Path + "\", "")
    Write-Host "[FIXED] $relativePath" -ForegroundColor Green
    $fixedCount++
}

Write-Host ""
Write-Host "Selesai. $checkedCount file dicek, $fixedCount file diperbaiki." -ForegroundColor Cyan

if ($fixedCount -gt 0) {
    Write-Host ""
    Write-Host "Cek dulu hasilnya (npm run dev) sebelum commit." -ForegroundColor Yellow
}
