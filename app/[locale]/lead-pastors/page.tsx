// app/[locale]/lead-pastors/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LeadPastorsHero } from "@/components/lead-pastors/LeadPastorsHero";
import { PastorsBio } from "@/components/lead-pastors/PastorsBio";
import { PastorsImage } from "@/components/lead-pastors/PastorsImage";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "leadPastors" });

  return {
    title: t("hero.title"),
    description: t("bio.description").substring(0, 160),
  };
}

export default function LeadPastorsPage() {
  return (
    <>
      <LeadPastorsHero />
      <PastorsBio />
      <PastorsImage />
    </>
  );
}