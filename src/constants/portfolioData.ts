export const PERSONAL_INFO = {
  name: "Satish Dabhi",
  title: "MERN Stack Developer",
  description:
    "Passionate MERN stack developer specializing in React.js, Next.js, Node.js, React Native, and Liferay CMS. Expert in mobile app development with Play Store and App Store deployments, plus web hosting and management.",
  location: "Gujarat, India",
  email: "satishdabhi0911@gmail.com",
  phone: "+91 91061 16932",
  resumeUrl:
    "https://drive.google.com/file/d/1SnQeCBkeQRaln5BhKGQiFOPCscSl8YHr/view?usp=sharing",
  profileUrl: "https://satish-dabhi.github.io/satish-profile/",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Satish-Dabhi",
  linkedin: "https://www.linkedin.com/in/satish-dabhi-05178816a/",
  email: "mailto:satishdabhi0911@gmail.com",
};

export const SEO_DATA = {
  title:
    "Satish Dabhi - MERN Stack Developer | React, Next.js, Node.js, React Native, Liferay CMS Expert",
  description:
    "Expert MERN Stack Developer specializing in React.js, Next.js, Node.js, React Native, and Liferay CMS. Professional mobile app development with Play Store and App Store deployments.",
  keywords:
    "Satish Dabhi, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, React Native, Mobile App Development, JavaScript, TypeScript, Full Stack Developer",
  image: "https://satish-dabhi.github.io/satish-profile/og-image.jpg",
  url: "https://satish-dabhi.github.io/satish-profile/",
};

export const ABOUT_DATA = {
  intro: [
    "I'm Satish Dabhi, an experienced MERN stack developer with a passion for creating innovative web applications and mobile solutions. With expertise in the complete JavaScript ecosystem, I build scalable and efficient applications.",
    "I specialize in Liferay CMS development, React Native mobile applications, and have successfully deployed multiple apps to both Play Store and App Store. I also provide comprehensive web hosting and server management services.",
    "My goal is to deliver high-quality, user-friendly applications that meet business requirements while maintaining clean, maintainable code.",
  ],
  skills: [
    {
      title: "MERN Stack Development",
      description: "React.js, Next.js, Node.js, MongoDB, Express.js",
    },
    {
      title: "Mobile App Development",
      description: "React Native, Play Store & App Store Deployment",
    },
    {
      title: "Liferay CMS Development",
      description: "Portal Development, Site Development, Theme Customization",
    },
    {
      title: "Web Hosting & Management",
      description: "Server Setup, Domain Management, Deployment",
    },
  ],
  technologies: [
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "React Native",
    "Liferay",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "Docker",
    "AWS",
    "Firebase",
    "MySQL",
  ],
  stats: [
    { value: "4+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "3+", label: "Apps Published" },
  ],
};

export const CONTACT_INFO = [
  {
    title: "Email",
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    title: "Phone",
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    title: "Location",
    value: PERSONAL_INFO.location,
    href: "#",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Full Stack",
  "Frontend",
  "Mobile",
  "CMS",
];
