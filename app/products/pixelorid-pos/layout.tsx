import JsonLd from "../../_components/JsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Pixelorid POS",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "A practical point-of-sale and business management solution for food trucks and mobile food businesses.",
          url: "https://www.pixelorid.biz.id/products/pixelorid-pos",
          publisher: {
            "@type": "Organization",
            name: "Pixelorid",
            url: "https://www.pixelorid.biz.id",
          },
        }}
      />
      {children}
    </>
  );
}