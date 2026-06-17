// app/[locale]/about/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { Leadership } from "@/components/about/Leadership";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("hero.title"),
    description: t("story.paragraph1").substring(0, 160),
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
      <Leadership />
    </>
  );
}