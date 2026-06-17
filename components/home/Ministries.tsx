// components/home/Ministries.tsx
"use client";

import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Heart, Users, Baby, Music, BookOpen, Globe } from "lucide-react";

const ministries = [
  {
    title: "Children's Ministry",
    description: "Nurturing young hearts with the love of God through engaging activities and teachings.",
    icon: Baby,
    color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20",
  },
  {
    title: "Youth Ministry",
    description: "Empowering the next generation to live boldly for Christ.",
    icon: Users,
    color: "text-green-500 bg-green-50 dark:bg-green-900/20",
  },
  {
    title: "Women's Ministry",
    description: "Equipping women with spiritual and practical tools for success.",
    icon: Heart,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
  },
  {
    title: "Worship & Music",
    description: "Leading people into God's presence through powerful praise and worship.",
    icon: Music,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
  },
  {
    title: "Bible Study",
    description: "Deepening understanding of God's Word through systematic teaching.",
    icon: BookOpen,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Missions & Outreach",
    description: "Taking the gospel to the ends of the earth and serving communities.",
    icon: Globe,
    color: "text-red-500 bg-red-50 dark:bg-red-900/20",
  },
];

export function Ministries() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle
          subtitle="Our Ministries"
          title="Get Involved"
          description="Discover a place where you can grow, connect, and serve."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry, index) => (
            <motion.div
              key={ministry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover padding="large">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${ministry.color}`}
                >
                  <ministry.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {ministry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ministry.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" href="/ministries">
            View All Ministries
          </Button>
        </div>
      </Container>
    </section>
  );
}