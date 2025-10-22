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
      name: "Aroma Cafe",
      description: "A responsive website for a cafe featuring menu display, contact information, and modern design.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Cafe,
      source_code_link: "https://github.com/Chirayu1411Mitra/Aroma-cafe.git",
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
    },
    {
      name: "Event Elevate",
      description: "An event management platform with email integration for seamless event planning and communication.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "EmailJs",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: EventElevate,
      source_code_link: "https://github.com/Chirayu1411Mitra/FEE-site.git",
    },
  ];
  
  export { technologies, projects };
