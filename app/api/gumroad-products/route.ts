import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.GUMROAD_ACCESS_TOKEN;

    const res = await fetch(
      `https://api.gumroad.com/v2/products?access_token=${token}`,
      { next: { revalidate: 3600 } } // cache 1 jam, biar tidak spam Gumroad
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch products" },
        { status: res.status }
      );
    }

    const data = await res.json();

    const products = data.products.map((p: any) => ({
      id: p.id,
      name: p.name,
      price: (p.price / 100).toFixed(2),
      currency: p.currency,
      url: p.short_url,
      thumbnail: p.thumbnail_url ?? null,
      salesCount: p.sales_count,
    }));

    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}