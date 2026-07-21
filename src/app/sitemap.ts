import type { MetadataRoute } from "next";

const baseUrl = "https://portafolio-henna-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pairs = [
    { spanish: "", english: "/en" },
    { spanish: "/software", english: "/en/work" },
    { spanish: "/interseccion", english: "/en/research" },
    { spanish: "/biomedica", english: "/en/background" }
  ];

  return pairs.flatMap(({ spanish, english }) => {
    const languages = {
      "es-MX": `${baseUrl}${spanish}`,
      en: `${baseUrl}${english}`,
      "x-default": `${baseUrl}${spanish}`
    };

    return [spanish, english].map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" || path === "/en" ? "monthly" as const : "yearly" as const,
      priority: path === "" || path === "/en" ? 1 : 0.8,
      alternates: { languages }
    }));
  });
}
