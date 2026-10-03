// ============================================================
// portfolioData.js — Centralized configuration for SINEGA SELVAKUMAR's portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "SINEGA SELVAKUMAR",
  firstName: "SINEGA",
  brandName: "SINEGA",
  title: "Salesforce Administrator | Aspiring Salesforce Developer",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 76039 23049",
  emails: {
    primary: "sinegas1652@gmail.com",
    secondary: "sinegas1652@gmail.com",
  },
  summary:
    "Salesforce Certified Platform Administrator and Agentforce Specialist with hands-on experience designing and configuring Service Cloud solutions. I build scalable CRM workflows using Flow automation, data modeling, security controls, approvals, SLA management, and reporting. Alongside Salesforce, I have a strong foundation in cloud technologies, SQL, Python, and data analytics.",
  resumeUrl: "/Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/ssinega",
  linkedin: "https://www.linkedin.com/in/sinegaselvakumar",
};

export const heroContent = {
  greeting: "Hi, I'm SINEGA",
  title: "Salesforce Administrator & Aspiring Salesforce Developer",
  credential: "Salesforce Certified Platform Administrator | Agentforce Specialist",
  subtitle:
    "I build secure, scalable Salesforce solutions using Service Cloud, Flow automation, data modeling, security, and reporting to solve real business problems.",
  ctaPrimary: { text: "Explore My Salesforce Work", href: "#projects" },
  ctaSecondary: { text: "Contact Me", href: "#contact" },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "About me",
  paragraphs: [
    "I'm Sinega Selvakumar, a Computer Science Engineering student and Salesforce Certified Platform Administrator and Agentforce Specialist. My primary career focus is Salesforce Administration and Salesforce Development.",
    "I enjoy translating business requirements into structured CRM solutions using custom objects, relationships, Flow Builder, validation rules, approval processes, role-based security, Service Cloud, reports, and dashboards.",
    "Through my flagship Salesforce project, WarrantyIQ, I designed an end-to-end warranty and service management solution covering asset management, case routing, SLA tracking, workflow automation, approvals, data governance, security, and operational reporting.",
    "Alongside Salesforce, I have experience with AWS, Azure, SQL, Python, data analytics, AI, and web technologies.",
    "I'm currently exploring Salesforce Administrator, Salesforce Developer, CRM, and Salesforce internship opportunities.",
  ],
  techStack: [
    "Salesforce Administration",
    "Service Cloud",
    "Flow Automation",
    "Agentforce",
    "CRM Solutions",
    "Cloud & Data",
  ],
};

export const skillsContent = {
  badge: "My Approach",
  heading: "How I build dependable Salesforce solutions",
  description:
    "I translate business requirements into secure CRM data models, Service Cloud workflows, automation, and reporting.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "I clarify business requirements, user roles, case lifecycles, and success criteria before shaping the CRM solution.",
    },
    {
      number: "02",
      title: "Design",
      text: "I map Salesforce objects, relationships, access controls, and service workflows to the requirements.",
    },
    {
      number: "03",
      title: "Develop",
      text: "I configure Service Cloud, Flow automation, approvals, validation, and reports around real business processes.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "I verify routing, security, SLA tracking, and reporting so teams can operate the solution consistently.",
    },
  ],
  endText: "Ready to build!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Salesforce Administration",
      skills: ["Custom Objects", "Lookup Relationships", "Master-Detail Relationships", "Record Types", "Page Layouts", "Validation Rules", "Formula Fields", "Approval Processes", "Queues & Assignment", "Email Alerts", "Duplicate Management"],
    },
    {
      title: "Salesforce Automation",
      skills: ["Flow Builder", "Record-Triggered Flow", "Screen Flow", "Case Routing", "Escalation", "Entitlements", "SLA Milestones"],
    },
    {
      title: "Salesforce Security & Access",
      skills: ["Profiles", "Permission Sets", "Role Hierarchy", "Org-Wide Defaults", "Sharing Rules", "Field-Level Security"],
    },
    {
      title: "Salesforce Platform",
      skills: ["Service Cloud", "Sales Cloud", "Agentforce", "Reports", "Dashboards", "Salesforce Developer Org"],
    },
    {
      title: "Programming & Data",
      skills: ["SQL", "Python", "JavaScript", "HTML5", "CSS3", "Excel", "PySpark"],
    },
    {
      title: "Cloud & Developer Tools",
      skills: ["AWS", "EC2", "S3", "DynamoDB", "Azure", "Git", "GitHub"],
    }
  ]
};

export const contentCreation = {
  badge: "Salesforce Career Focus",
  heading: "Salesforce capabilities",
  description: "I configure secure CRM environments, automate service workflows, and turn Salesforce data into operational insight.",
  categories: [
    {
      title: "Salesforce Administration",
      description: "Configure structured CRM environments using custom objects, relationships, page layouts, validation rules, approvals, security, and data governance.",
      stats: "CRM · Configuration",
      icon: "☁️"
    },
    {
      title: "Salesforce Automation",
      description: "Automate business processes using Record-Triggered Flows, Screen Flows, routing logic, notifications, approvals, and task automation.",
      stats: "Flow · Automation",
      icon: "⚡"
    },
    {
      title: "Service Cloud",
      description: "Design customer service workflows using Cases, Queues, Entitlements, SLA Milestones, routing, and escalation processes.",
      stats: "Cases · SLA",
      icon: "🎧"
    },
    {
      title: "Salesforce Security",
      description: "Implement role-based data access using Profiles, Permission Sets, OWD, Role Hierarchy, Sharing Rules, and Field-Level Security.",
      stats: "Access · Governance",
      icon: "🔒"
    },
    {
      title: "Reports & Dashboards",
      description: "Transform CRM data into actionable Salesforce reports and management dashboards for operational visibility.",
      stats: "Analytics · Reporting",
      icon: "📊"
    },
    {
      title: "Agentforce",
      description: "Explore AI-powered CRM workflows using Salesforce Agentforce and intelligent automation capabilities.",
      stats: "AI · Salesforce",
      icon: "✨"
    }
  ]
};

export const leadershipList = [
  {
    title: "Professional Service Director",
    description: "Rotaract Club of Coimbatore Sparks",
    role: "Aug 2025 – May 2026",
    badge: "Leadership"
  },
  {
    title: "Google Student Ambassador",
    description: "Google Student Ambassador program",
    role: "Sep 2025 – Dec 2025",
    badge: "Leadership"
  },
  {
    title: "Executive Member",
    description: "Regex Club & Xenix Association",
    role: "Aug 2024 – Oct 2025",
    badge: "Leadership"
  },
  {
    title: "Top Innovator — AI for Bharath 2025",
    description: "Top Innovator recognition at AI for Bharath 2025.",
    role: "Achievement",
    badge: "Achievement"
  },
  {
    title: "All Round Performer Nominee",
    description: "SNS College of Technology",
    role: "Achievement",
    badge: "Achievement"
  },
  {
    title: "Rajyapuraskar and Rashtrapathi Participant Awardee",
    description: "Bharat Scouts & Guides",
    role: "Achievement",
    badge: "Achievement"
  }
];

export const internshipsList = [
  {
    organization: "Codec Technologies",
    role: "Cloud Intern",
    duration: "May 2026 – Jun 2026",
    description: "Worked with AWS and Azure services to build and deploy secure, scalable cloud solutions, gaining hands-on exposure to infrastructure, storage, networking, and serverless technologies.",
  },
  {
    organization: "IBM Edunet",
    role: "AI Intern",
    duration: "May 2026 – Jun 2026",
    description: "Built AI web applications with Python and Streamlit and integrated machine learning pipelines with interactive dashboards for real-time insights.",
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
    id: "warrantyiq",
    number: "01",
    badge: "☁️ Salesforce Flagship Project",
    title: "WarrantyIQ — Intelligent Warranty & Service Resolution Hub",
    description:
      "Designed and configured an end-to-end Salesforce Service Cloud solution for managing customers, assets, support cases, warranty claims, repair orders, and parts requests.",
    highlights: [
      "Designed an asset-centric data model: Account → Asset → Case → Warranty Claim.",
      "Created Warranty Claim, Repair Order, and Parts Request custom objects with Lookup and Master-Detail relationships.",
      "Configured Product Support, Warranty Claim, and General Inquiry record types.",
      "Implemented Entitlements and SLA Milestones for response and resolution targets.",
      "Built formula fields for warranty days remaining and a Warranty Risk + SLA Priority mechanism for urgent cases.",
      "Automated claim intake, case routing, escalations, notifications, and follow-up tasks with Record-Triggered Flows and Screen Flows.",
      "Configured queues and assignment logic, plus approval processes for high-value warranty claims.",
      "Added validation rules and duplicate management.",
      "Secured Agent, Manager, and Admin personas with Profiles, Permission Sets, Role Hierarchy, Sharing Rules, and Field-Level Security.",
      "Built operational reports and management dashboards.",
    ],
    techTags: ["Salesforce", "Service Cloud", "Flow Builder", "Entitlements", "SLA", "Security", "Reports & Dashboards"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "smart-home",
    number: "02",
    badge: null,
    title: "Smart Home Automation",
    description:
      "Engineered a real-time home security system using YOLOv8 and OpenCV for live human presence detection, intrusion alerts, and evidence archiving.",
    techTags: ["YOLOv8", "OpenCV", "Python"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "neuroadvisor",
    number: "03",
    badge: null,
    title: "NeuroAdvisor AI",
    description:
      "Developed an AI-powered diagnostic tool for automated brain MRI analysis to assist clinicians in detecting and localizing abnormal regions using deep learning-based image segmentation.",
    techTags: ["Deep Learning", "Image Segmentation", "Python"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
  {
    id: "agrimitra",
    number: "04",
    badge: null,
    title: "Agrimitra",
    description:
      "Built an AI-based smart agriculture assistant delivering crop recommendations, real-time soil analysis, and weather-based guidance for Kerala farmers.",
    techTags: ["Python", "AI", "Recommendation Systems", "Agriculture"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "Salesforce Certified Platform Administrator",
      issuer: "Salesforce",
      icon: "☁️",
      url: "/certificates/Salesforce%20Certified%20Platform%20Administrator.pdf"
    },
    {
      name: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      icon: "⚡",
      url: "/certificates/Salesforce%20Certified%20Agentforce%20Specialist.pdf"
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      icon: "☁️",
      url: "/certificates/Azure%20AI%20Fundamentals%20.pdf"
    },
    {
      name: "Google Data Analytics",
      issuer: "Coursera",
      icon: "📊",
      url: "/certificates/COURSERA%20GOOGLE%20DATA%20ANALYTICS.pdf"
    },
    {
      name: "Programming in Java — 97%",
      issuer: "NPTEL",
      icon: "☕",
      url: "/certificates/Programming%20in%20Java.pdf"
    }
  ],
  viewAllUrl: "/certificates/COURSERA%20GOOGLE%20DATA%20ANALYTICS.pdf",
};

export const education = {
  degree: "B.E. Computer Science and Engineering",
  institution: "SNS College of Technology, Coimbatore",
  cgpa: "8.8 / 10",
  period: "2023 – 2027",
  status: "Currently studying",
};

export const footerContent = {
  taglines: [
    "Salesforce Administration · Service Cloud · Flow Automation",
    "Agentforce · CRM Solutions · Salesforce Security",
    "Cloud · Data · Automation",
  ],
  credential: "B.E. CSE · CGPA 8.8/10",
  copyright: `© ${new Date().getFullYear()} SINEGA SELVAKUMAR | Built with React`,
};

export const contactContent = {
  heading: "Let's Build Better Salesforce Experiences",
  paragraphs: [
    "I'm currently exploring opportunities as a Salesforce Administrator, Salesforce Developer, Salesforce Intern, or CRM-focused professional.",
    "If you're hiring for Salesforce roles, looking for someone interested in CRM configuration and automation, or would like to collaborate on a Salesforce project, I'd be happy to connect.",
  ],
  openTo: "Salesforce Administrator · Salesforce Developer · Salesforce Internships · CRM Projects · Entry-Level Salesforce Opportunities",
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
