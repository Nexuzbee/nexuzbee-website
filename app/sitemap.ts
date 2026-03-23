import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-data";

const pages = ["", "/services", "/academy", "/about", "/contact", "/privacy-policy", "/cookie-policy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `https://${siteConfig.domain}${page}`,
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : 0.7
  }));
}
