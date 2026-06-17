// app/[locale]/events/page.tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHeader } from "@/components/shared/PageHeader";
import { FeaturedEvent } from "@/components/events/FeaturedEvent";
import { EventList } from "@/components/events/EventList";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "events" });

  return {
    title: t("header.title"),
    description: t("header.description"),
  };
}

export default function EventsPage() {
  const featuredEvent = {
    title: "Exponential Conference 2026",
    date: "2026-09-15",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium, GGM Cameroun",
    image: "/images/events/featured-event.jpg",
    category: "Conference",
    href: "/events/exponential-2026",
  };

  const upcomingEvents = [
    {
      title: "Worship Night",
      date: "2026-07-20",
      time: "7:00 PM - 10:00 PM",
      location: "Main Sanctuary",
      image: "/images/events/event-1.jpg",
      category: "Worship",
      href: "/events/worship-night",
    },
    {
      title: "Men's Conference",
      date: "2026-08-05",
      time: "8:00 AM - 4:00 PM",
      location: "Conference Hall",
      image: "/images/events/event-2.jpg",
      category: "Conference",
      href: "/events/mens-conference",
    },
    {
      title: "Youth Retreat",
      date: "2026-08-18",
      time: "All Day",
      location: "Retreat Center",
      image: "/images/events/event-3.jpg",
      category: "Youth",
      href: "/events/youth-retreat",
    },
  ];

  const pastEvents = [
    {
      title: "Easter Service 2026",
      date: "2026-04-05",
      time: "10:00 AM",
      location: "Main Sanctuary",
      image: "/images/events/event-4.jpg",
      category: "Service",
      href: "/events/easter-2026",
    },
    {
      title: "Women's Summit",
      date: "2026-03-15",
      time: "9:00 AM - 3:00 PM",
      location: "Conference Hall",
      image: "/images/events/event-5.jpg",
      category: "Conference",
      href: "/events/womens-summit",
    },
  ];

  return (
    <>
      <PageHeader
        subtitle="Events"
        title="What's Happening at GGM"
        description="Stay connected with our upcoming services, conferences, and community gatherings."
      />
      <FeaturedEvent {...featuredEvent} />
      <EventList upcomingEvents={upcomingEvents} pastEvents={pastEvents} />
    </>
  );
}