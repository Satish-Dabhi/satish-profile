import aiChatAudioAssistantImage from "@/images/projects/ai-chat-audio-assistant-app.jpg";
import developerPortfolioImage from "@/images/projects/developer-portfolio-site.jpg";
import enterpriseCmsImage from "@/images/projects/enterprise-cms-portal.jpg";
import hospitalAdminImage from "@/images/projects/hospital-admin-portal.jpg";
import medicalDocImage from "@/images/projects/medical-doc-app.jpg";
import memoryCardFlipGameImage from "@/images/projects/memory-card-flip-game.jpg";
import modernPortFolioImage from "@/images/projects/modern-portfolio-website.jpg";
import realEstateImage from "@/images/projects/real-estate.jpg";
import recipeGuruImage from "@/images/projects/recipe-guru-cooking-app.jpg";
import smartSchoolImage from "@/images/projects/smart-school-app.jpg";

export const PROJECTS_DATA = [
  {
    id: 10,
    title: "Medical Document Platform with Authentication",
    description:
      "A secure and compliant platform designed for healthcare professionals to manage and access medical documents with advanced encryption, expert-curated resources, and HIPAA-aligned infrastructure.",
    image: medicalDocImage,
    technologies: ["React", "Node.js", "MY SQL", "Express", "PM2"],
    category: "Full Stack",
    github: "https://github.com/Satish-Dabhi/secure-docs-viewer.git",
    demo: "https://aquilacademia.com/",
  },
  {
    id: 2,
    title: "Smart School App",
    description:
      "A cross-platform mobile solution for school management, featuring push notifications, real-time updates, authentication, and offline capabilities, built with React Native and Firebase.",
    image: smartSchoolImage,
    technologies: ["React Native", "Firebase", "Redux", "REST API"],
    category: "Mobile",
    github: "https://github.com/Satish-Dabhi",
    demo: "https://play.google.com/store/apps/details?id=com.axcel.axcelsms&pcampaignid=web_share",
  },
  {
    id: 5,
    title: "Modern Portfolio Website",
    description:
      "A fully responsive and animated portfolio website built with Next.js, showcasing personal skills, projects, and interactive UI with smooth transitions.",
    image: modernPortFolioImage,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/Satish-Dabhi/lawyer-portfolio.git",
    demo: "https://lawyer-portfolio-eight.vercel.app/",
  },
  {
    id: 7,
    title: "AI Chat & Audio Assistant App",
    description:
      "A mobile AI chatbot app powered by OpenAI with audio interaction, real-time messaging, push notifications, and multi-platform deployment using React Native.",
    image: aiChatAudioAssistantImage,
    technologies: ["React Native", "Firebase", "OpenAI API", "Chatbot"],
    category: "Mobile",
    github: "https://github.com/Satish-Dabhi",
    demo: "https://play.google.com/store/apps/details?id=com.aihybrid&pcampaignid=web_share",
  },
  {
    id: 4,
    title: "Recipe Guru - Cooking App",
    description:
      "A real-time recipe sharing and discovery platform featuring Google authentication, search, likes, and detailed recipe info built with the MERN stack.",
    image: recipeGuruImage,
    technologies: ["React", "Google Auth", "Node.js", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/Satish-Dabhi/recipe-app.git",
    demo: "https://recipe-app-eight-dusky.vercel.app/auth",
  },
  {
    id: 8,
    title: "Developer Portfolio Site",
    description:
      "A sleek, personal website highlighting developer projects and technical skills with smooth transitions and responsive UI, built using modern frontend tools.",
    image: developerPortfolioImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/Satish-Dabhi/satish-profile",
    demo: "https://satish-dabhi.github.io/satish-profile/",
  },
  {
    id: 3,
    title: "Enterprise CMS Portal",
    description:
      "A robust content management solution using Liferay with customized themes, user roles, and React-based portlets for enterprise-level digital experiences.",
    image: enterpriseCmsImage,
    technologies: ["Liferay", "React", "JavaScript", "CSS3", "Node.js"],
    category: "CMS",
    github: "https://github.com/Satish-Dabhi",
    demo: "#",
  },

  {
    id: 1,
    title: "Real Estate Management Platform",
    description:
      "A comprehensive full-stack property listing and management platform with secure user authentication, payment gateway integration, and real-time notifications using React, Node.js, and MongoDB.",
    image: realEstateImage,
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    github: "https://github.com/Satish-Dabhi",
    demo: "https://ttb-zeta.vercel.app/",
  },

  {
    id: 6,
    title: "Hospital Admin Portal",
    description:
      "An end-to-end hospital management system built with the MERN stack, enabling doctor-patient records, billing, prescriptions, and secure login via JWT.",
    image: hospitalAdminImage,
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Material UI",
    ],
    category: "Full Stack",
    github: "https://github.com/Satish-Dabhi/hospital-management.git",
    demo: "https://sanjivani.hospital.com/",
  },
  {
    id: 9,
    title: "Card Flip Memory Game",
    description:
      "A responsive and interactive memory card game that challenges users with randomized cards, smooth animations, and responsive design.",
    image: memoryCardFlipGameImage,
    technologies: ["React", "Material UI"],
    category: "Frontend",
    github: "https://github.com/Satish-Dabhi/memory-card-game.git",
    demo: "https://satish-dabhi.github.io/memory-card-game/",
  },
];
