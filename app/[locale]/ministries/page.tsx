// app/[locale]/ministries/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { Container } from "@/components/shared/Container";
import { MinistryGrid } from "@/components/ministries/MinistryGrid";
import { JoinMinistry } from "@/components/ministries/JoinMinistry";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ministries" });

  return {
    title: t("header.title"),
    description: t("header.description"),
  };
}

export default function MinistriesPage({ }: Props) {
  // Server component — translations handled in child components
  return (
    <>
      <PageHeader
        subtitle="Our Ministries"
        title="Get Involved & Serve"
        description="Discover a place where you can grow, connect, and make a difference."
      />
      <section className="py-20 lg:py-28">
        <Container>
          <MinistryGrid />
        </Container>
      </section>
      <JoinMinistry />
    </>
  );
}