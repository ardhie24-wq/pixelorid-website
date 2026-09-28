# patch-footer.ps1
# Jalankan dari folder: D:\WEBSITE PIXELORID\pixelorid-website
# Fungsi: tambah kolom Legal di footer + fix encoding copyright

$file = "app\page.tsx"

# Backup dulu
Copy-Item $file "app\page_backup_before_legal_footer.tsx"
Write-Host "Backup dibuat: app\page_backup_before_legal_footer.tsx" -ForegroundColor Yellow

# Baca isi file
$content = Get-Content $file -Raw -Encoding UTF8

# ── PATCH 1: tambah kolom Legal setelah kolom Company ──
$oldFooterCompany = @'
            <div>
              <h3 className="font-bold text-slate-950">Company</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/about">
                  About
                </a>
                <a className="block hover:text-pixel-green" href="/pricing">
                  Pricing
                </a>
                <a className="block hover:text-pixel-green" href="/support">
                  Support
                </a>
              </div>
            </div>
          </div>
'@

$newFooterCompany = @'
            <div>
              <h3 className="font-bold text-slate-950">Company</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/about">
                  About
                </a>
                <a className="block hover:text-pixel-green" href="/pricing">
                  Pricing
                </a>
                <a className="block hover:text-pixel-green" href="/support">
                  Support
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-950">Legal</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/terms">
                  Terms of Service
                </a>
                <a className="block hover:text-pixel-green" href="/privacy">
                  Privacy Policy
                </a>
                <a className="block hover:text-pixel-green" href="/refund">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
'@

# ── PATCH 2: fix encoding copyright (Â© → ©) ──
$content = $content.Replace($oldFooterCompany, $newFooterCompany)
$content = $content.Replace("Â©", "©")

# Tulis kembali
[System.IO.File]::WriteAllText((Resolve-Path $file), $content, [System.Text.Encoding]::UTF8)

Write-Host ""
Write-Host "✅ Footer berhasil diupdate!" -ForegroundColor Green
Write-Host "   - Kolom 'Legal' ditambahkan (Terms / Privacy / Refund)" -ForegroundColor Green
Write-Host "   - Copyright Â© diperbaiki menjadi ©" -ForegroundColor Green
Write-Host ""
Write-Host "Langkah berikutnya: npm run dev  →  cek http://localhost:3000" -ForegroundColor Cyan
