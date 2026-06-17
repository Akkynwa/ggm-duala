// components/contact/ContactForm.tsx
"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/shared/Button";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const contactSchema = z.object({
    name: z.string().min(2, t("form.validation.nameMin")),
    email: z.string().email(t("form.validation.emailInvalid")),
    phone: z.string().optional(),
    subject: z.string().min(5, t("form.validation.subjectMin")),
    message: z.string().min(10, t("form.validation.messageMin")),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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

      if (!response.ok) throw new Error("Failed to send message");

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
    <section className="bg-muted py-20 lg:py-28">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="mb-10 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              {t("form.subtitle")}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              {t("form.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">{t("form.description")}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" as const }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-2xl bg-card p-6 shadow-md sm:p-8"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClasses}>
                {t("form.fields.name")} *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder={t("form.placeholders.name")}
                className={cn(inputClasses, errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
              />
              {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className={labelClasses}>
                  {t("form.fields.email")} *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={t("form.placeholders.email")}
                  className={cn(inputClasses, errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
                />
                {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  {t("form.fields.phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder={t("form.placeholders.phone")}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className={labelClasses}>
                {t("form.fields.subject")} *
              </label>
              <input
                id="subject"
                type="text"
                {...register("subject")}
                placeholder={t("form.placeholders.subject")}
                className={cn(inputClasses, errors.subject && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
              />
              {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClasses}>
                {t("form.fields.message")} *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message")}
                placeholder={t("form.placeholders.message")}
                className={cn(inputClasses, "resize-none", errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20")}
              />
              {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <div className="flex items-center gap-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                loading={status === "loading"}
                className="flex-1 sm:flex-none"
              >
                {status === "loading" ? (
                  t("form.sending")
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    {t("form.submit")}
                  </>
                )}
              </Button>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
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
                className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
              >
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                {t("form.error")}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}