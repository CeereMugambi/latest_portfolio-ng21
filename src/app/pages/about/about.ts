import { Component } from '@angular/core';
import { Flip } from '../../directives/flip';

@Component({
  selector: 'app-about',
  imports: [Flip],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  skillGroups = [
    {
      title: 'Frontend',
      items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS', 'Bootstrap', 'Figma'],
    },
    {
      title: 'Backend & Data',
      items: ['Node.js', 'Express', 'MongoDB', 'REST API Integration', 'SOA & Integration', 'Python'], // confirm Node.js, Express, MongoDB
    },
    {
      title: 'DevOps & Cloud',
      items: ['CI/CD', 'Docker', 'Kubernetes', 'Microsoft Azure', 'Google Cloud', 'GitHub'],
    },
    {
      title: 'Quality & AI',
      items: ['Jest', 'Automated & Manual Testing', 'Agile', 'Generative AI', 'LLMs & RAG', 'Agents & MCP'],
    },
  ];

  experience = [
    {
      role: 'Software Developer, SOA & Integration Development',
      company: 'Equity Bank Holdings Limited',
      period: 'May 2023 – Present',
      points: [
        'Build customer-facing and backoffice features for core branch systems supporting all subsidiaries.',
        'Integrate with backend APIs, debug integrations and resolve production issues quickly.',
        'Helped cut security vulnerabilities across branch services by about 80%, guiding junior developers through fixes.',
        'Built an in-branch auto-scan feature that automated document upload.',
        'Contributed to the V1 to V2 platform migration and monorepo research for the platform’s direction.',
        'Mentor junior developers and maintain stakeholder and technical documentation.',
      ],
    },
    {
      role: 'Graduate Trainee, DevOps & Front-End Angular',
      company: 'Smart Applications Limited',
      period: 'Mar 2023 – May 2023',
      points: [
        'Worked on CI/CD pipelines with Kubernetes and Docker.',
        'Supported Angular front-end feature development.',
      ],
    },
    {
      role: 'Software Engineering Intern',
      company: 'Equity Bank Holdings Limited',
      period: 'Jul 2021 – Sep 2021',
      points: [
        'Researched face recognition and Azure Cognitive Services.',
        'Built a prototype for digital-identity authentication with two-step verification.',
        'Built a Human Resource Management web application with the HR department.',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'Intelligent Technologies',
      period: 'May 2018 – Sep 2018',
      points: ['Collaborated on a cross-platform Hostel Management mobile app for university housing.'],
    },
  ];

  education = [
    { title: 'Master’s in Financial Engineering', detail: 'In progress' },
    { title: 'BSc Computer Science', detail: 'University of Nairobi, 2017 – 2022' },
  ];

  certifications = [
    'AI Engineer Core & Agentic Tracks (ongoing)',
    'WorldQuant: Foundations of Financial Engineering',
    'Generative AI: Advanced Techniques for IT',
    'Generative AI for Business Transformation',
    'Google Cloud Architect: Cloud Design',
    'Professional Scrum Product Owner (PSPO I)',
    'Professional Scrum Master (PSM I)',
    'Application Security for Developers and DevOps',
    'Angular Deep Dive (Angular 18)',
    'NgRx: The Complete Guide',
    'Angular Testing: Unit & E2E',
    'Mastering TypeScript',
    'React and TypeScript',
    'Huawei: Overview of AI',
  ];

  achievements = [
    { title: 'Equity Hackathon 2022, 3rd runner-up', text: 'Face-recognition prototype using Azure Cognitive Services.' },
    { title: 'National Science Congress 2016, 1st runner-up', text: 'Designed a multi-centurial calendar and led the team to Nationals.' },
  ];
}