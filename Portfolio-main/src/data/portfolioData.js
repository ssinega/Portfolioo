// ============================================================
// portfolioData.js — Centralized configuration for SINEGA SELVAKUMAR's portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "SINEGA SELVAKUMAR",
  firstName: "SINEGA",
  brandName: "SINEGA",
  title: "Data Analyst | Software Developer | Salesforce Developer",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 76039 23049",
  emails: {
    primary: "sinegas1652@gmail.com",
    secondary: "sinegas1652@gmail.com",
  },
  summary:
    "Data-driven software engineer with strong experience in analytics, cloud, AI/ML, and Salesforce development. Passionate about building secure, intelligent, and impactful digital products.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/sinegaselvakumar",
  instagram: "https://www.instagram.com/",
};

export const heroContent = {
  greeting: "Hi, I'm SINEGA",
  titleHighlight: "Data Analyst | Software Developer | Salesforce Developer",
  subtitle:
    "I build data-driven, AI-enabled, and cloud-ready solutions spanning analytics, automation, and Salesforce.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:sinegas1652@gmail.com?subject=Portfolio Inquiry&body=Hello Sinega,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">SINEGA SELVAKUMAR</span>, a Computer Science graduate focused on data analytics, software development, cloud computing, and Salesforce-based solutions.`,
  techStack: ["Data Analytics", "Cloud", "Salesforce", "AI/ML"],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "How I turn ideas into dependable, intelligent solutions",
  description:
    "I combine analytical thinking, software engineering, and modern cloud tools to build practical systems that solve real-world problems.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I start by understanding the problem, dataset, and user context so the solution is grounded in real needs.",
    },
    {
      number: "02",
      title: "Design",
      text: "I shape clear architecture, intuitive workflows, and secure systems that support scale and maintainability.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I build end-to-end solutions using Python, Java, cloud platforms, and data-driven automation tools.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "I focus on measurable outcomes, transparency, and polished deployment so the final product is usable and reliable.",
    },
  ],
  endText: "Ready to build!",
};

// Brand New Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 88 },
        { name: "Python", level: 92 },
        { name: "SQL", level: 88 }
      ]
    },
    {
      title: "Data Analytics & AI",
      skills: [
        { name: "PySpark", level: 80 },
        { name: "Excel", level: 90 },
        { name: "Data Cleaning", level: 92 },
        { name: "Dashboards", level: 86 }
      ]
    },
    {
      title: "Cloud & Databases",
      skills: [
        { name: "AWS", level: 84 },
        { name: "Azure Fundamentals", level: 82 },
        { name: "MySQL", level: 85 },
        { name: "DynamoDB", level: 78 }
      ]
    },
    {
      title: "Salesforce & Web",
      skills: [
        { name: "Salesforce CRM", level: 84 },
        { name: "Agentforce", level: 82 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 88 },
        { name: "JavaScript", level: 86 }
      ]
    },
    {
      title: "Computer Vision & Automation",
      skills: [
        { name: "YOLOv8", level: 84 },
        { name: "OpenCV", level: 82 },
        { name: "Image Segmentation", level: 81 },
        { name: "Streamlit", level: 84 }
      ]
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", level: 88 },
        { name: "Postman", level: 84 },
        { name: "Tkinter", level: 78 },
        { name: "Pygame", level: 72 }
      ]
    }
  ]
};

export const contentCreation = {
  badge: "Career Focus",
  heading: "Where I build value",
  description: "I work across analytics, automation, AI, and cloud-based products to turn data into clear, practical solutions.",
  categories: [
    {
      title: "Data Analytics",
      description: "Turning raw data into dashboards, insights, and decision-ready reports with structured analysis and visualization.",
      stats: "BI · Reporting",
      icon: "📊"
    },
    {
      title: "Cloud & Security",
      description: "Designing secure cloud systems with AWS services, networking, authentication, and scalable deployment patterns.",
      stats: "AWS · VPC",
      icon: "☁️"
    },
    {
      title: "AI & Computer Vision",
      description: "Developing predictive and image-based solutions that assist decision-making and automate real-world workflows.",
      stats: "ML · CV",
      icon: "🧠"
    },
    {
      title: "Salesforce Solutions",
      description: "Building practical CRM and automation experiences that align business needs with scalable digital workflows.",
      stats: "CRM · Agentforce",
      icon: "⚡"
    }
  ]
};

export const leadershipList = [
  {
    title: "B.E. Computer Science and Engineering",
    description: "Completed undergraduate studies at SNS College of Technology with a strong academic record and a focus on software engineering and applied computing.",
    role: "Student · 2023–2027",
    badge: "Education"
  },
  {
    title: "Cloud Computing Intern at Codec Technologies",
    description: "Built a secure file storage system using Streamlit, AWS S3, Cognito, and VPC architecture for authenticated cloud workflows.",
    role: "Internship",
    badge: "Cloud"
  },
  {
    title: "AI Intern at IBM Edunet (AICTE)",
    description: "Developed TruthLens, an AI-powered fake news detection system with explainability and a real-time dashboard.",
    role: "Internship",
    badge: "AI"
  },
  {
    title: "Salesforce & Analytics Certifications",
    description: "Earned recognized certifications in Salesforce, Google Data Analytics, Azure AI Fundamentals, and Java programming.",
    role: "Achievement",
    badge: "Certifications"
  }
];

export const internshipsList = [
  {
    organization: "Codec Technologies",
    role: "Cloud Computing Intern",
    duration: "May 2026 - Jun 2026",
    skills: ["Cloud Computing", "AWS", "Secure Architecture", "Streamlit"],
    tech: ["AWS S3", "AWS Cognito", "AWS VPC", "Streamlit"]
  },
  {
    organization: "IBM Edunet (AICTE)",
    role: "AI Intern",
    duration: "May 2026 - Jun 2026",
    skills: ["AI/ML", "Fake News Detection", "Explainability", "Dashboard Design"],
    tech: ["Python", "LIME", "Streamlit", "ML/DL Ensemble"]
  }
];

export const softSkillsList = [
  { name: "Analytical Thinking", icon: "📊", desc: "Breaking down complex problems into data-backed, actionable solutions." },
  { name: "Communication", icon: "💬", desc: "Explaining technical concepts clearly and collaborating with different stakeholders." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning new tools, frameworks, and workflows in evolving environments." },
  { name: "Problem Solving", icon: "🧩", desc: "Designing practical systems that balance technical depth with user value." },
  { name: "Team Work", icon: "🤝", desc: "Supporting collaborative development, research, and implementation work." },
  { name: "Time Management", icon: "⏰", desc: "Balancing academics, internships, and project delivery with discipline and focus." }
];

export const projects = [
  {
    id: "neuroadvisor",
    number: "01",
    badge: "🧠 AI Project",
    title: "NeuroAdvisor AI",
    description:
      "Developed an AI-powered diagnostic tool for automated brain MRI analysis to assist clinicians in detecting and localizing abnormal regions using deep learning-based image segmentation.",
    techTags: ["Python", "Deep Learning", "Image Segmentation", "Medical AI"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "agrimitra",
    number: "02",
    badge: null,
    title: "Agrimitra",
    description:
      "Built an AI-based smart agriculture assistant delivering crop recommendations, real-time soil analysis, and weather-based guidance for Kerala farmers.",
    techTags: ["Python", "AI", "Recommendation Systems", "Agriculture"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "smart-home",
    number: "03",
    badge: null,
    title: "Smart Home Automation",
    description:
      "Engineered a real-time home security system using YOLOv8 and OpenCV for live human presence detection, intrusion alerts, and evidence archiving.",
    techTags: ["Python", "YOLOv8", "OpenCV", "Computer Vision"],
    links: {
      github: "https://github.com/",
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      icon: "⚡",
      url: "/certificates/Salesforce%20Certified%20Agentforce%20Specialist.pdf"
    },
    {
      name: "Google Data Analytics",
      issuer: "Coursera",
      icon: "📊",
      url: "/certificates/COURSERA%20GOOGLE%20DATA%20ANALYTICS.pdf"
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      url: "/certificates/Azure%20AI%20Fundamentals%20.pdf"
    },
    {
      name: "Programming in Java",
      issuer: "NPTEL",
      icon: "☕",
      url: "/certificates/Programming%20in%20Java.pdf"
    }
  ],
  viewAllUrl: "/certificates/COURSERA%20GOOGLE%20DATA%20ANALYTICS.pdf",
};

export const education = {
  degree: "B.E. – Computer Science and Engineering",
  institution: "SNS College of Technology, Coimbatore",
  cgpa: "8.8 / 10",
  graduation: "2027",
  twelfth: "HSC – 86.2%",
  tenth: "Schooling – Completed",
};

export const footerContent = {
  taglines: [
    "Data Analytics • Software Development",
    "Cloud • Salesforce • AI/ML",
    "Secure, Intelligent Solutions",
  ],
  credential: "B.E. CSE · CGPA 8.8/10",
  copyright: `© ${new Date().getFullYear()} SINEGA SELVAKUMAR | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
