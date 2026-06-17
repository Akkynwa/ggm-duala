// components/forms/PrayerRequestForm.tsx
"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { prayerRequestSchema, type PrayerRequestData } from "@/lib/validations/prayer";
import { Button } from "@/components/shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface PrayerRequestFormProps {
  className?: string;
}

export function PrayerRequestForm({ className }: PrayerRequestFormProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      request: "",
      isPrivate: false,
    } as PrayerRequestData, // ✅ Explicitly cast defaults to resolve type friction
  });

  const onSubmit = async (data: PrayerRequestData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/prayer-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Failed to submit");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  const labelClasses = "mb-1.5 block text-sm font-medium text-foreground";

  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-5", className)}
    >
      {/* Name (Optional) */}
      <div>
        <label htmlFor="prayer-name" className={labelClasses}>
          {t("form.fields.name")} <span className="text-muted-foreground">({t("form.optional")})</span>
        </label>
        <input
          id="prayer-name"
          type="text"
          {...register("name")}
          placeholder={t("form.placeholders.name")}
          className={inputClasses}
          disabled={status === "loading"}
        />
      </div>

      {/* Email (Optional) */}
      <div>
        <label htmlFor="prayer-email" className={labelClasses}>
          {t("form.fields.email")} <span className="text-muted-foreground">({t("form.optional")})</span>
        </label>
        <input
          id="prayer-email"
          type="email"
          {...register("email")}
          placeholder={t("form.placeholders.email")}
          className={cn(inputClasses, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Prayer Request */}
      <div>
        <label htmlFor="prayer-request" className={labelClasses}>
          {t("prayer.form.request")} *
        </label>
        <textarea
          id="prayer-request"
          rows={5}
          {...register("request")}
          placeholder={t("prayer.form.placeholder")}
          className={cn(inputClasses, "resize-none", errors.request && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.request && <p className={errorClasses}>{errors.request.message}</p>}
      </div>

      {/* Private Checkbox */}
      <div className="flex items-center gap-3">
        <input
          id="prayer-private"
          type="checkbox"
          {...register("isPrivate")}
          className="h-4 w-4 rounded border-border text-accent focus:ring-accent"
        />
        <label htmlFor="prayer-private" className="text-sm text-muted-foreground">
          {t("prayer.form.private")}
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? t("form.sending") : (
          <>
            <Heart className="h-5 w-5" />
            {t("prayer.cta")}
          </>
        )}
      </Button>

      {/* Status Messages */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400"
          >
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            {t("prayer.form.success")}
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
          >
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            {t("form.error")}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}