import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { SiGooglecloud } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiChartdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiStorybook } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiGoland } from "react-icons/si";
import { SiStrapi } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiPostcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { SiRadixui } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiGithubpages } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandNuxt } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { DiNpm } from "react-icons/di";

const skillDetails = [
  {
    name: "HTML",
    key: "html",
    icon: <AiFillHtml5 />,
    iconURL: new URL('./../../../assets/html-5.svg', import.meta.url).href 
  },
  {
    name: "CSS",
    key: "css",
    icon: <FaCss3Alt />,
    iconURL: new URL('./../../../assets/css3.svg', import.meta.url).href 
  },
  {
    name: "JavaScript",
    key: "js",
    icon: <SiJavascript />,
    iconURL: new URL('./../../../assets/javascript.svg', import.meta.url).href 
  },
  {
    name: "Typescript",
    key: "ts",
    icon: <SiTypescript />,
    iconURL: new URL('./../../../assets/typescript.svg', import.meta.url).href 
  },
  
  {
    name: "React.js",
    key: "react",
    icon: <FaReact />,
    iconURL: new URL('./../../../assets/react.svg', import.meta.url).href 
  },
  {
    name: "Redux",
    key: "redux",
    icon: <SiRedux />,
    iconURL: new URL('./../../../assets/redux.svg', import.meta.url).href 
  },
  {
    name: "Next.js",
    key: "next",
    icon: <TbBrandNextjs />,
    iconURL: new URL('./../../../assets/next-js.svg', import.meta.url).href 
  },
  {
    name: "Node.js",
    key: "node",
    icon: <FaNodeJs />,
    iconURL: new URL('./../../../assets/nodejs.svg', import.meta.url).href 
  },
  {
    name: "Express.js",
    key: "express",
    icon: <SiExpress />,
    iconURL: new URL('./../../../assets/express-js.svg', import.meta.url).href 
  },
  {
    name: "MongoDB",
    key: "mongodb",
    icon: <SiMongodb />,
    iconURL: new URL('./../../../assets/mongodb.svg', import.meta.url).href 
  },
  {
    name: "MySQL",
    key: "mysql",
    icon: <SiMysql />,
    iconURL: new URL('./../../../assets/mysql.svg', import.meta.url).href 
  },
  {
    name: "Docker",
    key: "docker",
    icon: <FaDocker />,
    iconURL: new URL('./../../../assets/docker.svg', import.meta.url).href 
  },
  {
    name: "Nginx",
    key: "nginx",
    icon: <SiNginx />,
    iconURL: new URL('./../../../assets/nginx.svg', import.meta.url).href 
  },
  {
    name: "Postman",
    key: "postman",
    icon: <SiPostman />,
    iconURL: new URL('./../../../assets/postman.svg', import.meta.url).href 
  },
  {
    name: "Syntactically Awesome Style Sheets",
    key: "sass",
    icon: <FaSass />,
    iconURL: new URL('./../../../assets/sass.svg', import.meta.url).href 
  },
  {
    name: "TailwindCSS",
    key: "tailwind",
    icon: <SiTailwindcss />,
    iconURL: new URL('./../../../assets/tailwind-css.svg', import.meta.url).href 
  },
  {
    name: "Post CSS",
    key: "postcss",
    icon: <SiPostcss />,
    iconURL: new URL('./../../../assets/postcss.svg', import.meta.url).href 
  },
  // {
  //   name: "Strapi",
  //   key: "strapi",
  //   icon: <SiStrapi />,
  //   iconURL: "/assets/strapi.svg",
  // },
  // {
  //   name: "Figma",
  //   key: "figma",
  //   icon: <FaFigma />,
  //   iconURL: "/assets/figma.svg",
  // },
  // {
  //   name: "Storybook",
  //   key: "storybook",
  //   icon: <SiStorybook />,
  //   iconURL: "/assets/storybook.svg",
  // },
  // {
  //   name: "AdobeXD",
  //   key: "adobe",
  //   icon: <SiAdobexd />,
  //   iconURL: "/assets/adobe-xd.svg",
  // },
  {
    name: "NPM",
    key: "npm",
    icon: <DiNpm />,
    iconURL: new URL('./../../../assets/npm.svg', import.meta.url).href 
  },
  {
    name: "Yarn",
    key: "yarn",
    icon: <FaYarn />,
    iconURL: new URL('./../../../assets/yarn.svg', import.meta.url).href 
  },
  {
    name: "Vite",
    key: "vite",
    icon: <SiVite />,
    iconURL: new URL('./../../../assets/vite.svg', import.meta.url).href 
  },
  {
    name: "Git",
    key: "git",
    icon: <DiGit />,
    iconURL: new URL('./../../../assets/git.svg', import.meta.url).href 
  },
  {
    name: "GitHub Actions",
    key: "githubactions",
    icon: <SiGithubactions />,
    iconURL: new URL('./../../../assets/githubactions.svg', import.meta.url).href 
  },
  {
    name: "GitHub Pages",
    key: "githubpages",
    icon: <SiGithubpages />,
    iconURL: new URL('./../../../assets/githubpages.svg', import.meta.url).href 
  },
  {
    name: "Chart.js",
    key: "chart",
    icon: <SiChartdotjs />,
    iconURL: new URL('./../../../assets/chartjs.svg', import.meta.url).href 
  },
  {
    name: "Apexchart",
    key: "chart",
    icon: <SiChartdotjs />,
    iconURL: new URL('./../../../assets/apexchart.svg', import.meta.url).href
  },
  {
    name: "Chakra UI",
    key: "chakra-ui",
    icon: <SiChakraui />,
    iconURL: new URL('./../../../assets/chakra-ui.svg', import.meta.url).href 
  },
  {
    name: "React Table",
    key: "styled-components",
    icon: <SiStyledcomponents />,
    iconURL: new URL('./../../../assets/styled-components.svg', import.meta.url).href 
  },
  {
    name: "React Table",
    key: "react-table",
    icon: <SiStyledcomponents />,
    iconURL: new URL('./../../../assets/react-table.svg', import.meta.url).href
  },
  {
    name: "SQL Server",
    key: "sql-server",
    icon: <SiStyledcomponents />,
    iconURL: new URL('./../../../assets/sql-server.svg', import.meta.url).href
  },
];

export { skillDetails };
