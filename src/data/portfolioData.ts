import { Project, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const personalInfo = {
  name: 'Aya Samir Selim',
  title: 'Software Engineer | Backend Developer',
  specialization: 'C# | ASP.NET Core | Software Development',
  introduction:
    "I'm a Computer Engineering graduate passionate about building backend systems and software applications. I work primarily with C# and ASP.NET Core, with experience in APIs, databases, integrations, and desktop applications.",
  about: {
    degree: 'Computer Engineering graduate from Tanta University, Grade: Excellent.',
    focus: 'Focused on backend development, software architecture, databases, and system integration.',
    interest: 'Interested in exploring the connection between software, hardware, and real-world systems.',
  },
  contact: {
    email: 'ayasamir1810@gmail.com',
    phone: '+20 106 963 1936',
    linkedin: 'https://linkedin.com/in/ayasamirselim',
    github: 'https://github.com/Aya-Selim',
    location: 'Egypt',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    iconName: 'Server',
    skills: [
      'C#',
      'ASP.NET Core 8',
      'Web API',
      'REST APIs',
      'EF Core',
      'ADO.NET',
    ],
  },
  {
    title: 'Architecture',
    iconName: 'Layers',
    skills: [
      'Clean Architecture',
      'Onion Architecture',
      'CQRS',
      'MediatR',
      'Repository Pattern',
      'Unit of Work',
    ],
  },
  {
    title: 'Databases & Messaging',
    iconName: 'Database',
    skills: [
      'SQL Server',
      'PostgreSQL',
      'Redis',
      'RabbitMQ',
    ],
  },
  {
    title: 'Security & Integration',
    iconName: 'ShieldCheck',
    skills: [
      'JWT',
      'OAuth 2.0',
      'RBAC',
      'Stripe',
      'Webhooks',
      'SignalR',
    ],
  },
  {
    title: 'Tools & Cloud',
    iconName: 'Wrench',
    skills: [
      'Git',
      'Postman',
      'Swagger',
      'Azure',
      'Docker',
      'GitHub Actions',
    ],
  },
  {
    title: 'Desktop',
    iconName: 'Monitor',
    skills: [
      'Windows Forms',
      '.NET Framework 4.8',
      'Telerik UI',
      'Crystal Reports',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    subtitle: 'Enterprise Desktop Application',
    category: 'Desktop Application',
    isDesktop: true,
    featured: true,
    architecture: 'Four-Layer Architecture (UI, Service, Core, Data)',
    description:
      'A robust Windows desktop application engineered for reliable enterprise stock tracking, inventory operations, and low-stock reporting with strict data integrity.',
    highlights: [
      'Layered four-tier architecture: UI, Service, Core, and Data access layers',
      'Direct ADO.NET and parameterized SQL queries for high-performance transactions',
      'Role-based access control with Admin and Viewer privileges',
      'Security-first design using PBKDF2 password hashing and audit logging',
      'Soft-delete patterns ensuring historical record retention',
      'Telerik RadGridView and Crystal Reports integration for low-stock reporting',
    ],
    technologies: [
      'C#',
      'Windows Forms',
      '.NET Framework 4.8',
      'SQL Server',
      'ADO.NET',
      'Telerik UI',
      'Crystal Reports',
      'PBKDF2',
    ],
    githubUrl: 'https://github.com/Aya-Selim/InventoryManagementSystem',
    demoUrl: 'https://drive.google.com/file/d/1TLpJ4fyMVbc6Y14TSjmYLxj3STOzaVq2/view?usp=sharing',
  },
  {
    id: 'talentree',
    title: 'Talentree',
    subtitle: 'B2B E-Commerce Platform (Graduation Project)',
    category: 'Full-Stack & Backend',
    featured: true,
    architecture: 'Onion Architecture',
    description:
      'Graduation project delivering an enterprise B2B e-commerce platform with 100+ RESTful APIs powering multi-tenant business workflows, multiple roles, and asynchronous operations.',
    highlights: [
      'Engineered 100+ RESTful API endpoints supporting complex business workflows',
      'Implemented Redis caching for frequent catalog and session queries',
      'RabbitMQ message broker for decoupled background job processing',
      'Stripe payments and webhook verification with event handling',
      'Real-time communication using SignalR hubs for instant notifications',
      'Cloudinary integration for media assets and cloud storage',
    ],
    technologies: [
      'ASP.NET Core 8',
      'C#',
      'Onion Architecture',
      'REST APIs',
      'Redis',
      'RabbitMQ',
      'Stripe & Webhooks',
      'SignalR',
      'Cloudinary',
      'EF Core',
    ],
    githubUrl: 'https://github.com/Talentree-Platform/talentree-api',
    demoUrl: 'https://talentree-platform.vercel.app',
  },
  {
    id: 'knovia',
    title: 'Knovia',
    subtitle: 'E-Learning Platform Backend',
    category: 'Backend API',
    featured: true,
    architecture: 'Clean Architecture with CQRS & MediatR',
    description:
      'High-performance backend for an e-learning platform with 100+ RESTful endpoints, robust payment orchestration, and enterprise-grade authentication.',
    highlights: [
      'Architected with Clean Architecture, CQRS, and MediatR request handlers',
      'Over 100 RESTful endpoints serving courses, users, and enrollments',
      'Stripe PaymentIntents and Webhook handling with strict idempotency',
      'Authentication with JWT, Google OAuth 2.0, OTP verification, and refresh token rotation',
      'Role-Based Access Control (RBAC) across student, instructor, and admin tiers',
      'CI/CD with GitHub Actions, deployed to Azure App Service with Redis and RabbitMQ',
    ],
    technologies: [
      'ASP.NET Core 8',
      'Clean Architecture',
      'CQRS',
      'MediatR',
      'Stripe',
      'JWT & OAuth',
      'Redis',
      'RabbitMQ',
      'Azure App Service',
      'GitHub Actions',
    ],
    githubUrl: 'https://github.com/Knovia-Platform/Knovia-backend',
    demoUrl: 'https://Knovia-platform.vercel.app',
  },
  {
    id: 'talabat-backend',
    title: 'Talabat',
    subtitle: 'E-Commerce Backend System',
    category: 'Backend API',
    featured: false,
    architecture: 'Clean Architecture with EF Core',
    description:
      'A scalable e-commerce backend built with ASP.NET Core, focusing on clean separation of concerns, transactional safety, secure user authentication, and payment workflows.',
    highlights: [
      'Designed using Clean Architecture principles and Entity Framework Core',
      'Relational database design in SQL Server with optimized indexing',
      'Redis caching for basket storage and performance optimization',
      'Secure authentication using JWT and role authorization',
      'Stripe payment gateway integration for seamless order fulfillment',
    ],
    technologies: [
      'ASP.NET Core',
      'Clean Architecture',
      'EF Core',
      'SQL Server',
      'Redis',
      'Stripe',
      'JWT',
    ],
    githubUrl: 'https://github.com/Aya-Selim/E-Commerce-Platform',
  },
];

export const experience: ExperienceItem[] = [
  {
    id: 'appout',
    title: 'Software Engineering Intern',
    company: 'AppOut',
    period: 'Aug 2025 – Oct 2025',
    type: 'Internship',
    description:
      'Contributed to software engineering initiatives, focusing on backend tasks, feature development, code quality, and collaborative development within the engineering team.',
    tags: ['Backend Development', 'C#', '.NET', 'Software Engineering'],
  },
  {
    id: 'kenko',
    title: 'Business Applications Team Member',
    company: 'KenKo Ventures',
    period: 'May 2025 – Aug 2025',
    type: 'Team Member',
    description:
      'Worked with business applications, participating in system maintenance, integration requirements, and software workflows aligned with operational needs.',
    tags: ['Business Applications', 'System Integration', 'Software Workflows'],
  },
  {
    id: 'depi',
    title: 'Software Engineering Intern',
    company: 'DEPI (Digital Egypt Pioneers Initiative)',
    period: 'Apr 2024 – Oct 2024',
    type: 'Internship',
    description:
      'Participated in practical software engineering tracks covering .NET technologies, databases, clean software principles, and collaborative team projects.',
    tags: ['.NET', 'Databases', 'Clean Code', 'Web APIs'],
  },
];

export const education: EducationItem = {
  degree: 'Bachelor of Engineering in Computer Engineering',
  institution: 'Tanta University',
  faculty: 'Faculty of Engineering',
  completionDate: 'June 2026',
  grade: 'Excellent with Honors',
  details: [
    'Comprehensive engineering curriculum covering software engineering, data structures, algorithms, databases, operating systems, and computer architecture.',
    'Graduation project: Talentree (B2B E-Commerce Platform) implementing ASP.NET Core 8 with Onion Architecture.',
    'Active focus on bridging foundational hardware concepts with scalable distributed software systems.',
  ],
};

