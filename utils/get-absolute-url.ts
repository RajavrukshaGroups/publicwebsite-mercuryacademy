import { siteConfig } from "@/config/site.config";

export function getAbsoluteUrl(path = "") {
    const normalizedPath = path.startsWith("/")
        ? path
        : `/${path}`;

    return `${siteConfig.url}${normalizedPath}`;
}