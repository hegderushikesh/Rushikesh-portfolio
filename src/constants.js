// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import ecommere from './assets/work_logo/e_commere.png';
import chatgpt from './assets/work_logo/chatgpt.png';
import weatherappLogo from './assets/work_logo/weatherapp.png';
import chatapp from './assets/work_logo/chatapp.png';
import hostel_booking from './assets/work_logo/hostel-booking.png';
import job_portal from './assets/work_logo/job_portal.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
];

  
  
  export const education = [
    
    {
      id: 0,
      img: bsaLogo,
      school: "Keshav Memorial College of Engineering",
      date: "Sept 2022 - May 2026",
      grade: "78.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from Kmce College, Hyderabad. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at my College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology- (Computer Science)",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Sri Chaitanya Educational Institutions",
      date: "Apr 2020 - March 2022",
      grade: "94.5%",
      desc: "I completed my class 12 education from Sri Chaitanya Educational Institutions, under the SSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "SSC(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: glaLogo,
      school: "Vasavi high School",
      date: "Apr 2009 - March 2020",
      grade: "98.0%",
      desc: "I completed my class 10 education from Vasavi high School, under the SSC board, where I studied Science with Computer.",
      degree: "SSC(X), Science with Computer Application",
    },
  ];
  


  
  export const projects = [
    {
      id: 0,
      title: "E-commerce website ",
      description:
        "A modern and responsive e-commerce website built using React and Tailwind CSS, featuring real-time product data fetched via APIs. The application supports product browsing, search, and a smooth user experience across all devices.",
      image: ecommere,
      tags: ["React JS", "Tailwind CSS", "Node JS", "Express JS", "MongoDB","stripe","cloudinary"],
      github: "https://github.com/hegderushikesh/E-COMMMERE",
      webapp: "https://e-commmere-frontend.vercel.app",
    },
    {
      id: 1,
      title: "Weather App",
      description:
        "A responsive weather app built using React and Tailwind CSS that fetches real-time weather data using APIs. It displays current temperature, weather conditions, and location-based forecasts with a clean and user-friendly interface.",
      image: weatherappLogo,
      tags: ["React JS", "Tailwind CSS","ML","Node js","Express","MongoDB" ],
      github: "https://github.com/hegderushikesh/weather-app.git",
      webapp: "https://weather-app-rouge-seven.vercel.app/",
    },
    {
      id: 2,
      title: "Hostel Booking App",
      description:
        "A React-based web application that provides hostel booking services based on different criteria, such as location, amenities, and user preferences. The intuitive design and smooth experience make it a go-to app for students and travelers.",
      image: hostel_booking,
      tags: ["React JS", "Tailwind CSS", "API", "Node JS", "Express JS", "MongoDB","cloudinary","clerk"],
      github: "https://github.com/hegderushikesh/Hostel-Booking",
      webapp: "https://hostel-booking-theta-five.vercel.app",
    },
    {
      id: 3,
      title: "mini-chatgpt",
      description:
        "Developed a secure and user-friendly password generator using React and Tailwind CSS. The application allows users to generate strong passwords by selecting length and character types such as uppercase, lowercase, numbers, and symbols.",
      image: chatgpt,
      tags: ["React JS", "Tailwind CSS", "API","Node JS", "Express JS","Gemini Key","MongoDB"],
      github: "https://github.com/hegderushikesh/mini-Chatgpt",
      webapp: "https://mini-chatgpt-phi.vercel.app",
    },
    {
      id: 4,
      title: "Chat App",
      description:
        "A React.js-based chat application that allows users to communicate in real-time with friends and colleagues. Built using external APIs to ensure a seamless and responsive user experience.",
      image: chatapp,
      tags: ["React JS", "API", "Socket.IO", "Tailwind CSS", "Node JS","MongoDB","express js"],
      github: "https://github.com/hegderushikesh/Chat-App",
      webapp: "https://chats-app-mu.vercel.app",
    },
    {
      id: 5,
      title: "Online Job Portal",
      description:
        "The Online Job Portal is a modern, responsive web application built using React.js, Tailwind CSS, and Firebase that connects job seekers with recruiters on a single platform. The application allows users to explore job opportunities, apply for positions, and manage their profiles, while recruiters can post jobs and track applicants efficiently.",
      image: job_portal,
      tags: ["React JS", "API", "Firebase", "Tailwind CSS", "Next JS","MongoDB"],
      github: "https://github.com/hegderushikesh/Job-Portal",
      webapp: "https://job-portal-client-olive-five.vercel.app",
    },
  ];  