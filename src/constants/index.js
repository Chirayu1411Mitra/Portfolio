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
    threejs,
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
  ];
  
  const services = [
    {
      title: "Java",
      icon: web,
    },
    {
      title: "Typescript",
      icon: mobile,
    },
    {
      title: "C/C++",
      icon: backend,
    },
    {
      title: "JavaScript",
      icon: creator,
    },
  ];
  
  
  
  
  const projects = [
    {
      name: "Aroma Cafe",
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
      name: "Registration from",
     
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
      image: Form,
      source_code_link: "https://github.com/Chirayu1411Mitra/Registration-form.git",
    },
    {
      name: "Event Elevate",
      
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
  
  export { services, projects };