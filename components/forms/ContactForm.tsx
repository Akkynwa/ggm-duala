// components/forms/ContactForm.tsx
"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";
import { Button } from "@/components/shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

interface ContactFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Failed to send message");

      setStatus("success");
      reset();
      onSuccess?.();
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
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={labelClasses}>
          {t("form.fields.name")} *
        </label>
        <input
          id="contact-name"
          type="text"
          {...register("name")}
          placeholder={t("form.placeholders.name")}
          className={cn(inputClasses, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClasses}>
          {t("form.fields.email")} *
        </label>
        <input
          id="contact-email"
          type="email"
          {...register("email")}
          placeholder={t("form.placeholders.email")}
          className={cn(inputClasses, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="contact-phone" className={labelClasses}>
          {t("form.fields.phone")}
        </label>
        <input
          id="contact-phone"
          type="tel"
          {...register("phone")}
          placeholder={t("form.placeholders.phone")}
          className={inputClasses}
          disabled={status === "loading"}
        />
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className={labelClasses}>
          {t("form.fields.subject")} *
        </label>
        <input
          id="contact-subject"
          type="text"
          {...register("subject")}
          placeholder={t("form.placeholders.subject")}
          className={cn(inputClasses, errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          {t("form.fields.message")} *
        </label>
        <textarea
          id="contact-message"
          rows={5}
          {...register("message")}
          placeholder={t("form.placeholders.message")}
          className={cn(inputClasses, "resize-none", errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
          disabled={status === "loading"}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
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
            <Send className="h-5 w-5" />
            {t("form.submit")}
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
            {t("form.success")}
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