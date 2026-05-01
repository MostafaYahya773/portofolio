import { IconType } from 'react-icons';
export interface Skill {
  name: string;
  icon: IconType;
}
export interface Project {
  id?: string;
  name: string;
  title: string;
  description: string;
  tools: string;
  live_url: string;
  github_url: string;
  project_date: string;
  Future: string;
  Future_description: string;
  image_url: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  icon: any;
  iconColor?: string;
}

export interface Info {
  name: string;
  value: string;
  icon: any;
}

export interface MessageData {
  name: string;
  email: string;
  subject: string;
  description: string;
}
