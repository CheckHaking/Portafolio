import type { MetadataRoute } from "next";

const baseUrl = "https://portafolio-henna-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/software",
    "/interseccion",
    "/biomedica",
    "/en",
    "/en/work",
    "/en/research",
    "/en/background"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/en" ? "monthly" : "yearly",
    priority: path === "" || path === "/en" ? 1 : 0.8
  }));
}
