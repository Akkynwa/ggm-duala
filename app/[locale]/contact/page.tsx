// app/[locale]/contact/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { ChurchMap } from "@/components/contact/ChurchMap";
import { PrayerRequestCTA } from "@/components/contact/PrayerRequestCTA";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("header.title"),
    description: t("header.description"),
  };
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        subtitle="Get In Touch"
        title="Contact Us"
        description="We'd love to hear from you. Reach out to us for prayer requests, inquiries, or just to say hello."
      />
      <ContactInfo />
      <ContactForm />
      <ChurchMap />
      <PrayerRequestCTA />
    </>
  );
}