// lib/seo/metadata.ts
import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  locale?: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ggmcameroun.org";
const siteName = "GGM Cameroun";
const defaultImage = "/images/og-image.jpg";
const defaultLocale = "en_US";

export function generateSEO({
  title,
  description,
  url = siteUrl,
  image = defaultImage,
  type = "website",
  publishedTime,
  locale = defaultLocale,
}: SEOProps): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl}/en${url === siteUrl ? "" : url.replace(siteUrl, "")}`,
        fr: `${siteUrl}/fr${url === siteUrl ? "" : url.replace(siteUrl, "")}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...(publishedTime && {
      openGraph: {
        title: fullTitle,
        description,
        url,
        siteName,
        images: [{ url: imageUrl, width: 1200, height: 630 }],
        locale,
        type: "article",
        publishedTime,
      },
    }),
  };
}

export const defaultSEO: Metadata = generateSEO({
  title: "Making Greatness Common",
  description:
    "We are a global movement dedicated to empowering individuals with the transformative power of biblical wisdom and practical principles. Join us online and at our church expressions across the world.",
});