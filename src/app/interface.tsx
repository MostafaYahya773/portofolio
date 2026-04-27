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
