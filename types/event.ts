// types/event.ts

export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  date: string;
  endDate?: string;
  time: string;
  endTime?: string;
  location: string;
  image: string;
  category: EventCategory;
  status: EventStatus;
  registrationUrl?: string;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export type EventCategory =
  | "worship"
  | "conference"
  | "community"
  | "youth"
  | "women"
  | "men"
  | "children"
  | "outreach"
  | "other";

export type EventStatus = "upcoming" | "ongoing" | "past" | "cancelled";

export interface EventsResponse {
  events: Event[];
  total: number;
  page: number;
  pageSize: number;
}