// types/ministry.ts

export interface Ministry {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  image: string;
  icon?: string;
  color?: string;
  leader?: MinistryLeader;
  meetingTime?: string;
  meetingLocation?: string;
  contactEmail?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MinistryLeader {
  id: string;
  name: string;
  role: string;
  image: string;
  email?: string;
  phone?: string;
}

export interface MinistriesResponse {
  ministries: Ministry[];
  total: number;
}