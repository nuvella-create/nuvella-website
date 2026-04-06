import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/pitch", // פה אנחנו חוסמים את גוגל מלהיכנס למצגת שלך
    },
    sitemap: "https://nuvella.co.il/sitemap.xml",
  };
}
