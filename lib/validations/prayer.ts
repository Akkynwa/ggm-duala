// lib/validations/prayer.ts
import * as z from "zod";

export const prayerRequestSchema = z.object({
  name: z
    .string()
    .optional()
    .or(z.literal("")),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  request: z
    .string()
    .min(10, "Prayer request must be at least 10 characters")
    .max(2000, "Prayer request must be less than 2000 characters"),
  isPrivate: z
    .boolean()
    .default(false),
});

export type PrayerRequestData = z.infer<typeof prayerRequestSchema>;