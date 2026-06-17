// components/sermons/SermonFilters.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import { useState } from "react";
import { Search, Filter } from "lucide-react";

interface SermonFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
}

export function SermonFilters({
  categories,
  activeCategory,
  onCategoryChange,
  onSearch,
}: SermonFiltersProps) {
  const t = useTranslations("sermons");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="border-b border-border bg-card py-6">
      <div className="container-custom">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={t("filters.search")}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                )}
              >
                {category === "all"
                  ? t("filters.all")
                  : category}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}