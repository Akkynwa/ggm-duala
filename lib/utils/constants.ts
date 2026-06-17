// lib/utils/constants.ts
import { 
  MessageCircle, 
  Globe, 
  Camera,
  type LucideIcon 
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "nav.home", href: "/" },
  { label: "nav.whoWeAre", href: "/about" },
  { label: "nav.ministries", href: "/ministries" },
  { label: "nav.sermons", href: "/sermons" },
  { label: "nav.events", href: "/events" },
  { label: "nav.give", href: "/giving" },
  { label: "nav.contact", href: "/contact" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { label: "Twitter", href: "https://twitter.com/ggmcameroun", icon: MessageCircle },
  { label: "Facebook", href: "https://facebook.com/ggmcameroun", icon: Globe },
  { label: "Instagram", href: "https://instagram.com/ggmcameroun", icon: Camera },
];

export const siteConfig = {
  name: "GGM",
  tagline: "Thou at my battle axe",
  logo: "/logo/logo-colored-1.png",
  logoDark: "/logo/logo-white.svg",
};