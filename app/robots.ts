import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/studio/",
          "/api/",
          "/free-templates/confirmed",
        ],
      },
    ],
    sitemap: "https://www.pixelorid.biz.id/sitemap.xml",
    host: "https://www.pixelorid.biz.id",
  };
}

