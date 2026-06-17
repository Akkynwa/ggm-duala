// lib/utils/formatDate.ts
import { format, parseISO } from "date-fns";
import { enUS, fr } from "date-fns/locale";

export function formatDate(
  date: string,
  formatStr: string = "EEEE, MMMM d, yyyy",
  locale: string = "en"
): string {
  try {
    const parsedDate = typeof date === "string" ? parseISO(date) : date;
    const localeObj = locale === "fr" ? fr : enUS;
    return format(parsedDate, formatStr, { locale: localeObj });
  } catch {
    return date;
  }
}

export function formatTime(time: string): string {
  return time;
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate, "MMM d");
  if (!endDate) return start;
  const end = formatDate(endDate, "MMM d, yyyy");
  return `${start} - ${end}`;
}

export function isUpcoming(date: string): boolean {
  const eventDate = parseISO(date);
  return eventDate > new Date();
}

export function isPast(date: string): boolean {
  const eventDate = parseISO(date);
  return eventDate < new Date();
}