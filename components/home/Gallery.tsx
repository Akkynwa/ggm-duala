// components/home/Gallery.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Worship service" },
  { src: "/images/gallery/gallery-2.png", alt: "Community gathering" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Youth event" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Baptism" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Conference" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Praise team" },
];

export function Gallery() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Gallery"
          title="Moments & Memories"
          description="Glimpses of what God is doing in our community."
          className="mb-14"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <ImageIcon className="h-8 w-8 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" size="lg" href="/gallery">
            View Full Gallery
          </Button>
        </div>
      </Container>
    </section>
  );
}