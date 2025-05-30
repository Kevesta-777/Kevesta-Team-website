export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  link: string;
  githubLink?: string;
  features: string[];
  technologies: {
    [key: string]: string[];
  };
}

export type ProjectCategory = 'web' | 'mobile' | 'enterprise' | 'blockchain' | 'ai' | 'all';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}