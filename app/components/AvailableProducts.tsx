type GumroadProduct = {
  id: string;
  name: string;
  price: string;
  url: string;
  thumbnail: string | null;
};

const LIMIT = 6;

async function getProducts(): Promise<GumroadProduct[]> {
  try {
    const token = process.env.GUMROAD_ACCESS_TOKEN;
    if (!token) return [];

    const res = await fetch(
      `https://api.gumroad.com/v2/products?access_token=${token}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];

    const data = await res.json();
    return (data.products ?? []).map((p: any) => ({
      id: p.id,
      name: p.name,
      price: (p.price / 100).toFixed(2),
      url: p.short_url,
      thumbnail: p.thumbnail_url ?? null,
    }));
  } catch {
    return [];
  }
}

export default async function AvailableProducts() {
  const products = (await getProducts()).slice(0, LIMIT);
  if (products.length === 0) return null;

  return (
    <section id="available-products" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-bold text-pixel-green">AVAILABLE NOW</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Available Products
            </h2>
          </div>
          <a
            href="/digital-products"
            className="font-bold text-pixel-green transition hover:text-pixel-green-hover"
          >
            View All Digital Products &rarr;
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:shadow-md"
            >
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                />
              )}
              <h3 className="line-clamp-2 text-sm font-semibold text-slate-800">
                {product.name}
              </h3>
              <p className="mt-2 font-bold text-pixel-green">${product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}