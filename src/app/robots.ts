import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "*", allow: "/" }
    ],
    sitemap: "https://portafolio-henna-five.vercel.app/sitemap.xml"
  };
}
