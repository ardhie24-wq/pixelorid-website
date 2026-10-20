$ErrorActionPreference = 'Stop'

$project = 'D:\WEBSITE PIXELORID\pixelorid-website'
$root    = Join-Path $project 'app'
$backup  = Join-Path $project ('_backup\social-footer2-' + (Get-Date -Format 'yyyyMMdd-HHmmss'))
$utf8    = New-Object System.Text.UTF8Encoding($false)   # UTF-8 tanpa BOM

New-Item -ItemType Directory -Path $backup -Force | Out-Null

$updated = 0
$skipped = 0

$files = Get-ChildItem $root -Recurse -File -Filter *.tsx

foreach ($f in $files) {
    $text = [System.IO.File]::ReadAllText($f.FullName)
    $rel  = $f.FullName.Substring($root.Length + 1)

    $m = [regex]::Match($text, '(?s)<footer.*?</footer>')
    if (-not $m.Success) { continue }

    $footer = $m.Value

    if ($footer -match 'instagram\.com/pixelorid') {
        Write-Host "SUDAH ADA  : $rel" -ForegroundColor Yellow
        continue
    }

    $nl = "`n"
    if ($text.Contains("`r`n")) { $nl = "`r`n" }

    $newFooter = $null

    if ($footer.Contains('{links.map(')) {
        # Tipe A: footer halaman legal (rata tengah, daftar link dari "links")
        $lines = @(
            '      <div className="mt-4 flex flex-wrap justify-center gap-5">',
            '        <a href="https://www.instagram.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#16a34a]">Instagram</a>',
            '        <a href="https://id.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#16a34a]">Pinterest</a>',
            '      </div>'
        )
        $block = '  ' + (($lines -join $nl).TrimStart())
        $pos   = $footer.LastIndexOf('</footer>')
        $newFooter = $footer.Insert($pos, $block + $nl + '    ')
    }
    elseif ($footer.Contains('All rights reserved')) {
        $img = [regex]::Match($footer, '(?s)<img.*?/>')
        if ($img.Success) {
            # Tipe B: footer halaman produk (logo di kiri, copyright di kanan)
            $lines = @(
                '          <div className="flex items-center gap-5 text-sm font-semibold text-slate-600">',
                '            <a href="https://www.instagram.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Instagram</a>',
                '            <a href="https://id.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>',
                '          </div>'
            )
            $block = $lines -join $nl
            $newFooter = $footer.Insert($img.Index + $img.Length, $nl + $nl + $block)
        }
    }

    if ($null -eq $newFooter) {
        Write-Host "DILEWATI   : $rel (struktur footer tidak dikenali)" -ForegroundColor Red
        $skipped++
        continue
    }

    $newText = $text.Substring(0, $m.Index) + $newFooter + $text.Substring($m.Index + $m.Length)

    $backupName = $rel -replace '\\', '_'
    Copy-Item $f.FullName (Join-Path $backup $backupName)

    [System.IO.File]::WriteAllText($f.FullName, $newText, $utf8)
    Write-Host "DIPERBARUI : $rel" -ForegroundColor Green
    $updated++
}

Write-Host ''
Write-Host "Selesai. Diperbarui: $updated file, dilewati: $skipped file." -ForegroundColor Cyan
Write-Host "Cadangan file asli ada di: $backup"
Write-Host "Langkah berikutnya: jalankan 'npm run dev' lalu cek footer di browser."
