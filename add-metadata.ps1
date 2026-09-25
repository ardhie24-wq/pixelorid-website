# Jalankan script ini dari root project: D:\WEBSITE PIXELORID\pixelorid-website
# Script ini otomatis menyisipkan "export const metadata" ke tiap file,
# tepat setelah baris import terakhir. Kalau file sudah punya "export const metadata",
# file itu dilewati (tidak diubah) supaya tidak bentrok/dobel.

function Add-Metadata {
    param(
        [string]$FilePath,
        [string]$MetadataBlock
    )

    if (-not (Test-Path $FilePath)) {
        Write-Host "[SKIP] Tidak ditemukan: $FilePath" -ForegroundColor Yellow
        return
    }

    $content = Get-Content $FilePath -Raw

    if ($content -match 'export const metadata') {
        Write-Host "[SKIP] Sudah ada metadata: $FilePath" -ForegroundColor Yellow
        return
    }

    $lines = Get-Content $FilePath
    $lastImportIndex = -1
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($lines[$i] -match '^\s*import\s') { $lastImportIndex = $i }
    }

    if ($lastImportIndex -eq -1) {
        $newContent = "$MetadataBlock`r`n`r`n" + $content
    } else {
        $before = $lines[0..$lastImportIndex]
        $after = if ($lastImportIndex + 1 -lt $lines.Count) { $lines[($lastImportIndex + 1)..($lines.Count - 1)] } else { @() }
        $newContent = ($before -join "`r`n") + "`r`n`r`n$MetadataBlock`r`n`r`n" + ($after -join "`r`n")
    }

    Set-Content -Path $FilePath -Value $newContent -Encoding UTF8
    Write-Host "[OK] Metadata ditambahkan: $FilePath" -ForegroundColor Green
}

$root = Get-Location

Add-Metadata -FilePath "$root\app\layout.tsx" -MetadataBlock @'
export const metadata = {
  title: {
    default: "Pixelorid — POS, Loop & Digital Products",
    template: "%s | Pixelorid",
  },
  description: "Pixelorid menyediakan Pixelorid POS, Pixelorid Loop, dan berbagai produk digital untuk bisnis Anda.",
  metadataBase: new URL("https://pixelorid.biz.id"),
  openGraph: {
    title: "Pixelorid",
    description: "Pixelorid menyediakan Pixelorid POS, Pixelorid Loop, dan berbagai produk digital untuk bisnis Anda.",
    url: "https://pixelorid.com",
    siteName: "Pixelorid",
    images: ["/pixelorid-logo.png"],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelorid",
    description: "Pixelorid menyediakan Pixelorid POS, Pixelorid Loop, dan berbagai produk digital untuk bisnis Anda.",
    images: ["/pixelorid-logo.png"],
  },
}
'@

Add-Metadata -FilePath "$root\app\about\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Tentang Kami",
  description: "Kenali lebih dekat Pixelorid dan tim di baliknya.",
}
'@

Add-Metadata -FilePath "$root\app\digital-products\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Produk Digital",
  description: "Jelajahi produk digital Pixelorid yang tersedia di Etsy, Gumroad, dan Payhip.",
}
'@

Add-Metadata -FilePath "$root\app\pricing\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Harga",
  description: "Lihat paket harga Pixelorid POS dan Pixelorid Loop.",
}
'@

Add-Metadata -FilePath "$root\app\products\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Produk",
  description: "Semua produk Pixelorid: POS, Loop, dan lainnya.",
}
'@

Add-Metadata -FilePath "$root\app\products\pixelorid-loop\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Pixelorid Loop",
  description: "Pixelorid Loop — solusi langganan (subscription) untuk bisnis Anda.",
}
'@

Add-Metadata -FilePath "$root\app\products\pixelorid-pos\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Pixelorid POS",
  description: "Pixelorid POS — sistem kasir modern untuk bisnis Anda.",
}
'@

Add-Metadata -FilePath "$root\app\support\page.tsx" -MetadataBlock @'
export const metadata = {
  title: "Dukungan",
  description: "Butuh bantuan? Hubungi tim support Pixelorid.",
}
'@

Write-Host ""
Write-Host "Selesai. Domain sudah diset ke https://pixelorid.biz.id" -ForegroundColor Cyan
