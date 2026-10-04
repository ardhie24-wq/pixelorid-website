import JsonLd from "../../_components/JsonLd";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Pixelorid Resto",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Restaurant software that brings orders, tables, reservations, staff and reports into one practical system, for one branch or many.",
          url: "https://www.pixelorid.biz.id/products/pixelorid-resto",
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