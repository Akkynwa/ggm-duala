// app/[locale]/giving/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { WhyGive } from "@/components/giving/WhyGive";
import { GivingOptions } from "@/components/giving/GivingOptions";
import { BankDetails } from "@/components/giving/BankDetails";
import { GivingCTA } from "@/components/giving/GivingCTA";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "giving" });

  return {
    title: t("header.title"),
    description: t("header.description"),
  };
}

export default function GivingPage() {
  return (
    <>
      <PageHeader
        subtitle="Give"
        title="Support the Vision"
        description="Your generosity fuels the mission of making greatness common."
      />
      <WhyGive />
      <GivingOptions />
      <BankDetails />
      <GivingCTA />
    </>
  );
}