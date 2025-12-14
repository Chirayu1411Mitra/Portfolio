import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    Cafe,
    Form,
    EventElevate,
    s3drive,
    threejs,
    aws,
    Firebase,
    Mysql,
    java,
    express,
    C,
    python,
    psql
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C/C++",
      icon: C,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Express Js",
      icon: express,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Postgre Sql",
      icon: psql,
    },
    {
      name: "My SQL",
      icon: Mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Firebase",
      icon: Firebase,
    },
    
  ];
  
  
  
  
  const projects = [
    {
      name: "DevBlog",
      description: "A responsive website for posting and reading Blogs",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "PSQL",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: Cafe,
      source_code_link: "https://github.com/Chirayu1411Mitra/DevBlog.git",
      demo_link: "https://www.devblog.live/", // Add your actual demo link here
    },
    {
      name: "S3 Personal Drive",
      description: "A secure personal cloud drive application utilizing AWS S3 for scalable file storage and Firebase for user authentication",
      tags: [
        {
          name: "AWS S3",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      ],
      image: s3drive,
      source_code_link: "https://github.com/Chirayu1411Mitra/S3-Personal-Drive.git",
      demo_link: "https://s3-personal-drive-96n9.vercel.app/", // Add your actual demo link here
    },
    {
      name: "Pole Position",
      description: "Developed an AI to optimize F1 car ERS deployment for the fastest lap times on any given circuit.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Scikit-learn",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
      ],
      image: EventElevate,
      source_code_link: "https://github.com/Chirayu1411Mitra/F1-ERS-AI.git",
      demo_link: "https://chirayumitra-pole-position.hf.space/", // Add your actual demo link here
    },
  ];
  
  export { technologies, projects };
