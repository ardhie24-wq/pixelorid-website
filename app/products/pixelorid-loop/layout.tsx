import JsonLd from "../../_components/JsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Pixelorid Loop",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "A web-based client follow-up app for small service businesses to track leads and clients and know who to follow up with.",
          url: "https://www.pixelorid.biz.id/products/pixelorid-loop",
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