// components/ministries/MinistryGrid.tsx
"use client";

import { useTranslations } from "next-intl";
import { MinistryCard } from "./MinistryCard";
import {
  Baby, Users, Heart, Music, BookOpen, Globe,
  HandHeart, Church, GraduationCap,
} from "lucide-react";

export function MinistryGrid() {
  const t = useTranslations("ministries");

  const ministries = [
    {
      key: "children",
      icon: Baby,
      image: "/images/ministries/children.jpg",
      color: "bg-pink-500 text-white",
    },
    {
      key: "youth",
      icon: Users,
      image: "/images/ministries/youth.jpg",
      color: "bg-green-500 text-white",
    },
    {
      key: "women",
      icon: Heart,
      image: "/images/ministries/women.jpg",
      color: "bg-purple-500 text-white",
    },
    {
      key: "men",
      icon: HandHeart,
      image: "/images/ministries/men.jpg",
      color: "bg-blue-500 text-white",
    },
    {
      key: "worship",
      icon: Music,
      image: "/images/ministries/worship.jpg",
      color: "bg-orange-500 text-white",
    },
    {
      key: "bibleStudy",
      icon: BookOpen,
      image: "/images/ministries/bible-study.jpg",
      color: "bg-teal-500 text-white",
    },
    {
      key: "missions",
      icon: Globe,
      image: "/images/ministries/missions.jpg",
      color: "bg-red-500 text-white",
    },
    {
      key: "discipleship",
      icon: GraduationCap,
      image: "/images/ministries/discipleship.jpg",
      color: "bg-indigo-500 text-white",
    },
    {
      key: "hospitality",
      icon: Church,
      image: "/images/ministries/hospitality.jpg",
      color: "bg-yellow-500 text-white",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {ministries.map((ministry, index) => (
        <MinistryCard
          key={ministry.key}
          title={t(`items.${ministry.key}.title`)}
          description={t(`items.${ministry.key}.description`)}
          icon={ministry.icon}
          image={ministry.image}
          href={`/ministries/${ministry.key}`}
          color={ministry.color}
          index={index}
        />
      ))}
    </div>
  );
}