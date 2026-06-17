// components/layout/Footer.tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, socialLinks } from "@/lib/utils/constants";
import { cn } from "@/lib/utils/cn";
import { ArrowUpRight, Heart, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const t = useTranslations();
  const [logoError, setLogoError] = useState(false);

const quickLinks = [
  { label: "nav.whoWeAre", href: "/about" },
  { label: "nav.ministries", href: "/ministries" },
  { label: "nav.sermons", href: "/sermons" },
  { label: "nav.events", href: "/events" },
  { label: "nav.give", href: "/giving" },
  { label: "nav.contact", href: "/contact" },
];

  const legalLinks = [
    { label: "footer.privacyPolicy", href: "/privacy-policy" },
    { label: "footer.termsConditions", href: "/terms-and-conditions" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Duala, Cameroon" },
    { icon: Phone, text: "+237 6 12 34 56 78" },
    { icon: Mail, text: "info@ggmcameroun.org" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-primary">
      {/* Decorative top wave/pattern */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-accent via-purple-500 to-accent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="container-custom relative py-16 lg:py-20">
        {/* Top Section - Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {t("footer.stayConnected")}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                {t("footer.getUpdates")}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-primary shadow-lg shadow-accent/20 transition-all hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95">
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-4"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              {!logoError ? (
                <Image
                  src={siteConfig.logo}
                  alt={siteConfig.name}
                  width={44}
                  height={44}
                  className="h-10 w-auto"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-yellow-400">
                  <span className="font-display text-lg font-black text-primary">
                    G
                  </span>
                </div>
              )}
              <div>
                <p className="font-display text-lg font-bold text-white">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-accent uppercase tracking-widest">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              {t("footer.attend")}
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-sm text-white/50">
                  <item.icon className="h-4 w-4 text-accent" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-all hover:text-white hover:gap-3"
                  >
                    <span className="h-[2px] w-0 rounded-full bg-accent transition-all group-hover:w-3" />
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex h-11 w-11 items-center justify-center rounded-xl transition-all",
                      "bg-white/5 text-white/50",
                      "hover:bg-accent hover:text-primary hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-1"
                    )}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-accent">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="container-custom flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between">
          <p className="flex items-center gap-1.5 text-xs text-white/30">
            <Heart className="h-3.5 w-3.5 text-accent/50" />
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}