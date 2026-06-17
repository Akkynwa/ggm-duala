// types/sermon.ts

export interface Sermon {
  id: string;
  title: string;
  slug: string;
  description: string;
  series: string;
  speaker: Speaker;
  date: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  audioUrl?: string;
  topics: string[];
  scriptureReferences: string[];
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export interface SermonSeries {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  sermonsCount: number;
  startDate: string;
  endDate?: string;
}

export interface SermonsResponse {
  sermons: Sermon[];
  total: number;
  page: number;
  pageSize: number;
}