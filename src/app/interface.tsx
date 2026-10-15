import { IconType } from 'react-icons';
export interface Skill {
  name: string;
  icon: IconType;
}
export interface Project {
  id: string;
  name: string;
  title: string;
  description: string | null;
  tools: string | null;
  live_url: string | null;
  github_url: string | null;
  project_date: string | null;
  Future: string | null;
  Future_description: string | null;
  image_url: string | null;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  icon: IconType;
  iconColor?: string;
}

export interface Info {
  name: string;
  value: string;
  icon: IconType;
}

export interface MessageData {
  name: string;
  email: string;
  subject: string;
  description: string;
}
