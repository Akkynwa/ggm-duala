// components/home/Testimonials.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GGM Cameroun has been a place of transformation for my entire family. The teachings are practical and life-changing.",
    author: "Marie D.",
    role: "Member since 2020",
  },
  {
    quote: "I found my purpose and community here. The leadership genuinely cares about every individual.",
    author: "Jean-Paul K.",
    role: "Small Group Leader",
  },
  {
    quote: "The worship experience is unlike anything I've experienced. Every service leaves me refreshed and empowered.",
    author: "Grace M.",
    role: "Worship Team",
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Testimonials
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Lives Changed
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative rounded-2xl bg-white/5 p-8 backdrop-blur-sm"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/50" />
              <p className="mb-6 text-sm leading-relaxed text-white/80 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-xs text-accent">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}