// types/common.ts

export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Link {
  label: string;
  href: string;
  external?: boolean;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PageParams {
  locale: string;
}

export interface PageProps {
  params: Promise<PageParams>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export type Locale = "en" | "fr";

export type Theme = "light" | "dark" | "system";