// components/forms/NewsletterForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/shared/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

const newsletterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterFormProps {
  className?: string;
  variant?: "inline" | "stacked";
}

export function NewsletterForm({ className, variant = "stacked" }: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Failed to subscribe");

      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputClasses =
    "rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

  if (variant === "inline") {
    return (
      <div className={cn("w-full", className)}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            {...register("name")}
            placeholder="Your name"
            className={cn(inputClasses, "flex-1")}
            disabled={status === "loading"}
          />
          <input
            type="email"
            {...register("email")}
            placeholder="Your email"
            className={cn(inputClasses, "flex-1", errors.email && "border-red-500")}
            disabled={status === "loading"}
          />
          <Button
            type="submit"
            variant="accent"
            loading={status === "loading"}
            className="flex-shrink-0"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 flex items-center gap-2 text-sm text-green-600"
            >
              <CheckCircle className="h-4 w-4" />
              Subscribed successfully!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 flex items-center gap-2 text-sm text-red-500"
            >
              <AlertCircle className="h-4 w-4" />
              Something went wrong. Try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)}>
      <div>
        <input
          type="text"
          {...register("name")}
          placeholder="Your name"
          className={cn(inputClasses, "w-full")}
          disabled={status === "loading"}
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Your email address"
          className={cn(inputClasses, "w-full", errors.email && "border-red-500")}
          disabled={status === "loading"}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <Button
        type="submit"
        variant="accent"
        size="lg"
        loading={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? (
          "Subscribing..."
        ) : (
          <>
            <Mail className="h-5 w-5" />
            Subscribe to Newsletter
          </>
        )}
      </Button>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400"
          >
            <CheckCircle className="h-4 w-4 flex-shrink-0" />
            Youve been subscribed successfully!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400"
          >
            <AlertCircle className="h-4 w-4 flex-shrink-0" />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}