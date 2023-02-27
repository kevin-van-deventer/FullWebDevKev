import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";

import { FaAppStore } from "react-icons/fa"
import { SiNativescript } from "react-icons/si"
import { SiJamstack } from "react-icons/si"

import { MdDeveloperMode } from "react-icons/md"
import { HiServer } from "react-icons/hi"
import { RiAdvertisementFill } from "react-icons/ri"

import { RxAccessibility } from "react-icons/rx"
import { SiGoogleanalytics } from "react-icons/si"
import { MdManageAccounts } from "react-icons/md"


// homepage
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "rgb(5 244 141)",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "rgb(0 193 245)",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "rgb(237 29 78)",
  },
];

export const WhatDoIHelp = ["Creating beautiful and functional websites that meet the needs of businesses and individuals alike.","I strive to stay up-to-date with the latest technologies and trends in the industry to deliver top-notch solutions to my clients."]

export const workExp = [
  {
    place: "Full-Time, Australia, Sydney",
    tenure: "Jan 2021 - Ungoing",
    role: "Full Stack Developer",
    detail:
      "Designing, developing, and maintaining websites and web applications. Lead projects and supervise junior developers.",
  },
  {
    place: "FreeLance, International",
    tenure: "Aug 2019 - Dec 2020",
    role: "Jnr Developer & Designer",
    detail:
      "Designing and implementing user-friendly and visually appealing web pages and interfaces.",
  },
  {
    place: "Shield technology",
    tenure: "Aug 2017 - Sep 2018",
    role: "Senior Data Analyst",
    detail:
      "Examining, interpreting, and analyzing large sets of data to extract valuable insights and make data-driven decisions. Useing various tools and techniques to clean, process, and manipulate data to identify patterns, trends, and correlations.",
  },
];

export const comments = [
  {
    name: "TechWhisper",
    post: "Director",
    comment:
      "I had the pleasure of working with Kevin on a website design project and I was truly impressed with his skills and dedication. He took the time to understand my needs and delivered a solution that exceeded my expectations. His attention to detail and ability to stay up-to-date with the latest technologies made him a valuable asset to the project. I highly recommend Kevin for any web development needs.",
    img: "./people2.png",
    imgAlt: "Online digital solutions by TechWhisper South Africa",
    imgLink: "https://techwhisper.info/",
    follow: "no-follow"
  },
  {
    name: "Fitzgerald Housing",
    post: "CEO",
    comment:
      "I was looking for a developer who could bring my vision to life and Kevin did just that. He designed a beautiful and functional website for my business that has received many compliments. He was professional, responsive, and went above and beyond to ensure I was satisfied with the end result. I would definitely work with him again in the future.",
    img: "./people1.png",
    imgAlt: "Fitzgerald Housing Property Investors Australia",
    imgLink: "https://www.fitzgeraldhousing.org.au/",
    follow: "no-follow"
  },
  {
    name: "EFSR",
    post: "Senior Manager",
    comment:
      "Kevin's expertise in web development and design is truly exceptional. He brought a unique perspective and innovative ideas to the table, resulting in a high-quality end product. He was able to manage the project with ease, effectively communicating with my team and delivering on-time. I am very grateful for his contribution to our project and would highly recommend him to others.",
    img: "./people2.png",
    follow: "no-follow"
  },
  {
    name: "KanSeng",
    post: "Owner CEO",
    comment:
      "Kevin is a talented and knowledgeable full-stack developer. He has an eye for design and the technical skills to bring it to life. He was able to take my project from concept to completion with ease and efficiency. He was always available to answer my questions and offer solutions to any challenges that arose. I highly recommend him for anyone looking for a reliable and skilled developer.",
    img: "./people1.png",
    imgAlt: "KanSeng Online Fashion Store Cambodia",
    imgLink: "https://kanseng.shop/",
    follow: "no-follow"
  },
  {
    name: "VD Realty Solutions",
    post: "Co-Owner",
    comment:
      "Kevin's work on my mobile app design project was nothing short of amazing. He took the time to understand my vision and was able to translate it into a seamless and user-friendly app. His professionalism and attention to detail was apparent in every aspect of the project. I would definitely work with him again and highly recommend him to others.",
    img: "./people2.png",
    imgAlt: "Van Deventer Realty Solutions South Africa",
    imgLink: "https://kvdrealtysolutions.com/",
    follow: "no-follow"
  },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "As a brand identity designer, Kevin is second to none. He took the time to understand my brand and created a unique and memorable design that accurately reflected my company. His creativity and expertise in design and web development made him a valuable asset to my project. I highly recommend him to anyone looking for a talented and professional designer.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "I have worked with Kevin on several projects over the past few years and I have been consistently impressed with his skills and dedication. He has a deep understanding of web development and design, and is always up-to-date with the latest technologies. He is a true professional who always delivers high-quality work and exceeds my expectations. I would not hesitate to recommend him to others.",
  //   img: "./people2.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "I had the privilege of working with Kevin on a website redesign project and he was an absolute pleasure to work with. He took the time to understand my goals and was able to create a solution that was not only beautiful, but also functional. His expertise in web development and design was evident in the end result, and I was extremely satisfied with his work. I would highly recommend him to anyone looking for a talented and professional developer.",
  //   img: "./people1.png",
  // },
  // {
  //   name: "Anamika Sandula",
  //   post: "Creative Manager",
  //   comment:
  //     "Kevin's design skills are truly exceptional. He was able to create a unique and visually appealing design that accurately reflected my brand. His attention to detail and commitment to delivering a high-quality end product was evident in every aspect of the project. I would not hesitate to work with him again and would highly recommend him to others.",
  //   img: "./people2.png",
  // },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// developer page
export const BioContent = [
  `I am a full stack web developer who is committed to delivering high-quality projects for various clients. My experience covers a wide range of areas such as web apps, MERN stack, digital marketing, analytics and more. Explore my skills and services and understand why I am the right choice for your next web development project.`,
  "WEB APPS: Developing web applications that are scalable, reliable, and user - friendly. Having years of experience in building web applications using various technologies such as React, Angular, Node.js, and more. I develop custom web applications that meet the specific needs of your business.",
  "MERN STACK: With my knowledge in the MERN stack(MongoDB, Express.js, React.js, and Node.js). I can develop complex web applications using the MERN stack that are fast, secure, and efficient. I use the latest tools and technologies to ensure that the web applications are of the highest quality.",
  "STATIC SITES: I develop static sites that are lightweight, fast, and SEO-friendly. I ensure that the static sites are optimized for performance and can be accessed across all devices. I use the latest technologies such as Gatsby, Next.js, and Hugo to develop static sites.",
  "JAMSTACK:  The JAMstack (JavaScript, APIs, and Markup) can develop web applications that are fast, secure, and scalable. Using technologies such as Netlify, Vercel, and AWS to ensure phenominal that the JAMstack web applications.",
  "NATIVE APPS: I develop native apps for iOS and Android platforms using React Native.  He uses the latest tools and technologies such as Redux, Expo, and Firebase to develop native apps.",
  "UI/UX: I have an eye for detail and can design user interfaces that are aesthetically pleasing and easy to use. He ensures that the user interfaces are intuitive and user-friendly. Figma, Sketch, and Adobe XD to design user interfaces.",
  "HOSTING: I provide hosting solutions that are reliable, secure, and scalable. Set up private servers for your web applications and ensure that they are optimized for performance.AWS, DigitalOcean, and Heroku to provide hosting solutions.",
  "MARKETING: I provide marketing solutions tailored to your business needs that can help your business reach its target audience.",
  "ACCESSIBILITY: I ensure that the web applications that I develop are accessible to everyone. I follow the latest web accessibility guidelines such as WCAG 2.1.",
  "AUDIT & DEVELOPMENT: As a full stack web developer, I have an extensive range of skills and experience in various web development technologies, including MERN stack, React Native, JAMstack, and more.",
  "UI/UX: I have a keen eye for detail when it comes to user interface and user experience design. Visually appealing designs that are easy to navigate and use. Your website or application will not only look great but also be easy to use for your target audience.",
  "HOSTING: Providing hosting solutions for my clients, including private servers that are secure, reliable and optimized for speed, security, and reliability.",
  "MARKETING: Having experience in digital marketing. Creating successful online marketing campaigns. Improve your online presence and attract more visitors.",
  "ACCESSIBILITY: I am committed to creating websites and applications that are accessible to everyone. Ensuring that people with disabilities can access and use websites and applications. Ensure that your website or application meets the latest web accessibility standards.",
  "AUDIT & TESTING: I also provide audit and testing services to ensure that websites and applications are running at optimal performance, and to identify and fix any issues that may be affecting website or application performance.",
  "ANALYTICS: The importance of data in making informed decisions,using various analytics tools to track website or application performance and user behavior. Gain valuable insights into how your website or application is performing and make data-driven decisions to improve its performance.",
  "SEO & SECURITY: Having experience in search engine optimization (SEO) and website security. The importance of optimizing websites for search engines and ensuring that they are secure from cyber threats has become more vital.",
  "MANAGEMENT: I am also skilled in project management, ensuring that projects are completed on time and within budget. I am proactive in my communication and keeps clients updated on the progress of their projects.",
  "WEB OPTIMIZATION: Finally, the importance of web optimization in ensuring that websites and applications are running at optimal performance. I optimize website and application performance, including optimizing images, minimizing code, and caching.",
  "CONCLUSION: I am a skilled and experienced full stack web developer who delivers high-quality projects to my clients. With my expertise in web development, I am the ideal choice for any web development project. So, if you're looking for a reliable and experienced web developer, look no further than Kevin Van Deventer."
];

export const softwareStacks = [
  {
    name: "WEB APPS",
    projects: "MERN STACK",
    icon: FaAppStore,
    bg: "rgb(237 29 78)",
  },
  {
    name: "STATIC SITES",
    projects: "JAMSTACK",
    icon: SiJamstack,
    bg: "rgb(237 29 78)",
  },
  {
    name: "NATIVE APPS",
    projects: "REACT NATIVE",
    icon: SiNativescript,
    bg: "rgb(237 29 78)",
  },
];

export const developmentServices= [
  {
    name: "DEVELOPMENT",
    projects: "UI/UX",
    icon: MdDeveloperMode,
    bg: "rgb(0 193 245)",
  },
  {
    name: "HOSTING",
    projects: "Private Servers",
    icon: HiServer,
    bg: "rgb(0 193 245)",
  },
  {
    name: "MARKETING",
    projects: "DIGITAL MARKETING",
    icon: RiAdvertisementFill,
    bg: "rgb(0 193 245)",
  },
];

export const performanceServices= [
  {
    name: "ACCESSIBILITY",
    projects: "AUDIT & TESTING",
    icon: RxAccessibility,
    bg: "rgb(5 244 141)",
  },
  {
    name: "ANALYTICS",
    projects: "SEO & SECURITY",
    icon: SiGoogleanalytics,
    bg: "rgb(5 244 141)",
  },
  {
    name: "MANAGEMENT",
    projects: "WEB OPTIMIZATION",
    icon: MdManageAccounts,
    bg: "rgb(5 244 141)",
  },
];