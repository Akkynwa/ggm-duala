// app/[locale]/page.tsx
import { Hero } from "@/components/home/Hero";
import { Welcome } from "@/components/home/Welcome";
import { ServiceTimes } from "@/components/home/ServiceTimes";
import { Ministries } from "@/components/home/Ministries";
import { Events } from "@/components/home/Events";
import { Sermons } from "@/components/home/Sermons";
import { Testimonials } from "@/components/home/Testimonials";
import { Gallery } from "@/components/home/Gallery";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Gallery />
      <Events />
      <Ministries />
      <ServiceTimes />
      <Sermons />
      <Testimonials />
      <CallToAction />
    </>
  );
}