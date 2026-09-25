# Jalankan dari root project: D:\WEBSITE PIXELORID\pixelorid-website
# v3: deteksi mojibake lebih luas (termasuk panah, tanda kutip, strip, dll)
# Scan semua file .tsx dan .ts di app/, components/, src/.
# File yang tidak ada masalah tidak disentuh sama sekali.

$folders = @("app", "components", "src") | Where-Object { Test-Path $_ }

if ($folders.Count -eq 0) {
    Write-Host "Tidak menemukan folder app/components/src. Jalankan script ini dari root project." -ForegroundColor Red
    exit
}

$files = Get-ChildItem -Path $folders -Recurse -Include *.tsx, *.ts -File

# Tanda mojibake dasar: satu karakter saja cukup, dibangun via kode karakter
# supaya tidak ada karakter aneh langsung di source script ini.
$marker1 = [string]([char]0x00E2)   # muncul di awal HAMPIR SEMUA mojibake dari UTF-8 3-byte (panah, strip, kutip pintar, dst)
$marker2 = [string]([char]0x00C3)   # muncul di awal mojibake dari UTF-8 2-byte
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
    Write-Host "PENTING: hentikan dev server (Ctrl+C), hapus cache, lalu jalankan ulang:" -ForegroundColor Yellow
    Write-Host "  Remove-Item -Recurse -Force .next" -ForegroundColor Yellow
    Write-Host "  npm run dev" -ForegroundColor Yellow
}
