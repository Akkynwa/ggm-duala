// app/[locale]/sermons/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { SermonPlayer } from "@/components/sermons/SermonPlayer";
import { SermonGrid } from "@/components/sermons/SermonGrid";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "sermons" });

  return {
    title: t("header.title"),
    description: t("header.description"),
  };
}

export default function SermonsPage() {
  const latestSermon = {
    title: "The Power of Persistent Faith",
    series: "Faith That Moves Mountains",
    speaker: "Pastor Godman Akinlabi",
    date: "2026-06-14",
    duration: "45:30",
    description:
      "In this powerful message, Pastor Godman explores the transformative power of persistent faith. Drawing from biblical examples, he demonstrates how unwavering belief in God's promises can overcome any obstacle and unlock the extraordinary in your life.",
    thumbnail: "/images/sermons/latest-sermon.jpg",
  };

  const recentSermons = [
    {
      title: "Walking in Divine Purpose",
      series: "Purpose Driven Life",
      speaker: "Pastor Micheal",
      date: "2026-06-07",
      duration: "38:15",
      thumbnail: "/images/sermons/sermon-1.jpg",
      href: "/sermons/walking-in-divine-purpose",
    },
    {
      title: "The Grace of Generosity",
      series: "Kingdom Finances",
      speaker: "Pastor Godman Akinlabi",
      date: "2026-05-31",
      duration: "42:00",
      thumbnail: "/images/sermons/sermon-2.jpg",
      href: "/sermons/grace-of-generosity",
    },
    {
      title: "Overcoming Fear with Faith",
      series: "Fearless Living",
      speaker: "Pastor Micheal",
      date: "2026-05-24",
      duration: "40:45",
      thumbnail: "/images/sermons/sermon-3.jpg",
      href: "/sermons/overcoming-fear",
    },
    {
      title: "The Holy Spirit: Your Helper",
      series: "Understanding the Holy Spirit",
      speaker: "Pastor Godman Akinlabi",
      date: "2026-05-17",
      duration: "50:20",
      thumbnail: "/images/sermons/sermon-4.jpg",
      href: "/sermons/holy-spirit-helper",
    },
    {
      title: "Building Strong Families",
      series: "Family Matters",
      speaker: "Pastor Micheal",
      date: "2026-05-10",
      duration: "44:10",
      thumbnail: "/images/sermons/sermon-5.jpg",
      href: "/sermons/building-strong-families",
    },
    {
      title: "Victory in Spiritual Warfare",
      series: "Spiritual Warfare",
      speaker: "Pastor Godman Akinlabi",
      date: "2026-05-03",
      duration: "52:30",
      thumbnail: "/images/sermons/sermon-6.jpg",
      href: "/sermons/spiritual-warfare",
    },
  ];

  return (
    <>
      <PageHeader
        subtitle="Sermons"
        title="Messages That Transform"
        description="Access life-changing messages from our services."
      />
      <SermonPlayer {...latestSermon} />
      <SermonGrid
        sermons={recentSermons}
        title="Recent Sermons"
        description="Explore our collection of powerful messages."
      />
    </>
  );
}