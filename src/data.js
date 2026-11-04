import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiVite, SiJavascript,SiGit } from "react-icons/si";

import projectOneImg from './assets/project1.png';
import projectTwoImg from './assets/project2.png';
import projectThreeImg from './assets/project3.png';


export const skills = [
  {
    id: 1,
    name: "HTML5",
    description: "Semantic structures, accessible markups, and SEO-friendly foundations.",
    icon:FaHtml5,
  },
  {
    id: 2,
    name: "CSS3",
    description: "Responsive layouts, animations, flexbox, grid, and clean modern aesthetics.",
    icon: FaCss3Alt,
  },
  {
    id: 3,
    name: "JavaScript",
    description: "Modern ES6+ syntax, asynchronous programming, and DOM manipulation.",
    icon: SiJavascript,
  },
  {
    id: 4,
    name: "React",
    description: "Component architecture, custom hooks, state management, and SPA development.",
    icon: FaReact,
  },
  {
    id: 5,
    name: "Vite",
    description: "Lightning-fast module bundling, asset optimization, and dev environments.",
    icon: SiVite ,
  },
  {
    id: 6,
    name: "Git",
    description: "Version control and collaboration.",
    icon: SiGit ,
  },
];
export const projects = [
    {id:1,
    title:"Fylo",
    description:"React single page application made for personal project",
    tech:["HTML","Javascript","CSS","React","Vite"],
    liveUrl:"https://fylo-reactapp.vercel.app/",
    image:projectOneImg,
    githubUrl:"https://github.com/Eyobt4/Fylo-reactapp"
    },
    {id:2,
    title:"Ecoarm",
    description:"React single page application made for personal project",
    tech:["HTML","Javascript","CSS"],
    liveUrl:"https://web-clone-six.vercel.app/",
    image:projectTwoImg,
    githubUrl:"https://github.com/Eyobt4/Web-Clone"
    },
    {id:3,
    title:"Portfolio",
    description:"React single page application made for personal portfolio website",
    tech:["HTML","Javascript","CSS","React","Vite"],
    liveUrl:"https://eyob-tesfaye1.vercel.app/",
    image:projectThreeImg,
    githubUrl:"https://github.com/Eyobt4/portfolio"
    },
    
    

]