$content = Get-Content -Raw -Path "app\digital-products\page.tsx"

$old1 = "export default function DigitalProductsPage() {"
$new1 = @'
async function getGumroadProducts() {
  const res = await fetch("http://localhost:3000/api/gumroad-products", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products ?? [];
}

export default async function DigitalProductsPage() {
  const products = await getGumroadProducts();
'@

$old2 = "</header>"
$new2 = @'
</header>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Available Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md"
            >
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                />
              )}
              <h3 className="text-sm font-semibold text-slate-800">
                {product.name}
              </h3>
              <p className="mt-2 text-pixel-green font-bold">
                ${product.price}
              </p>
            </a>
          ))}
        </div>
      </section>
'@

$content = $content.Replace($old1, $new1).Replace($old2, $new2)
Set-Content -Path "app\digital-products\page.tsx" -Value $content -NoNewline

Write-Host "Selesai. File sudah diupdate." -ForegroundColor Green