export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Full-Stack & Backend' | 'Desktop Application' | 'Backend API';
  description: string;
  architecture: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  isDesktop?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  tags?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  faculty: string;
  completionDate: string;
  grade: string;
  details?: string[];
}

