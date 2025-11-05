// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import snestronlogo from './assets/company_logo/snestron_logo.png';
import postman from './assets/tech_logo/postman.png'
import abes from './assets/education_logo/abes.png'
import shantiniketan from './assets/education_logo/shantiniketan.png'
import biharboard from './assets/education_logo/BSEB-Bihar-Board.jpg'
import cursorlogo from './assets/tech_logo/icons8-cursor-ai-48.png'
import TrayLogo from './assets/tech_logo/Trayai_logo.jpg'
import chesslogo from './assets/projectslogo/chess.png'
import authmernlogo from './assets/projectslogo/authmern.png'
import codereviewer from './assets/projectslogo/codereviewer.png'
import neptimetable from './assets/projectslogo/neptimetable.png'
import thunderlogo from './assets/tech_logo/thunderlogo.png'
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
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
      { name: 'Postman', logo: postman },
      {name:'Cursor',logo:cursorlogo},
      {name:'Tray',logo:TrayLogo},
      {name:'ThunderClient',logo:thunderlogo},
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: snestronlogo,
      role: "C Programming",
      company: "Snestron Systems",
      date: "August 2025 to September 2025",
      desc: "Completed diverse programming tasks and submitted assignments on schedule, providing detailed updates every four days. Collaborated with senior team members, gained valuable insights, and enhanced my skills through active learning and mentorship.",
      skills: [
        "C programming",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    ];

  
  export const education = [
    {
      id: 0,
      img: abes,
      school: "ABES Engineering college",
      date: "Sept 20224 - Sept 2028",
      grade: "8.86 SGPA",
      desc: "I am a 2nd-year B.Tech (CSE) student at ABES Engineering College with a current SGPA of 9.41. I am passionate about Artificial Intelligence and Machine Learning, and skilled in MERN Stack development. I enjoy creating projects that integrate AI/ML concepts with full-stack applications, while continuously learning and collaborating on innovative solutions.",
      degree: "Bachelor of Technology",
    },
    {
      id: 1,
      img: biharboard,
      school: "Narma College,Muzaffarpur",
      date: "Feb 2021 - Feb 2023",
      desc: "I completed my Class 12th from Bihar Board, with Physics, Chemistry, and Mathematics as my core subjects, along with Hindi and English as optional subjects.",
      degree: "BSEB(XII),PCM",
    },
    {
      id: 2,
      img: shantiniketan,
      school: "Shantiniketan school,Muzaffarpur",
      date: "Apr 2014 - Apr 2021",
      desc: "I completed my schooling up to Class 10th at Shantiniketan School, Muzaffarpur, under the CBSE board, with Science and Sanskrit as my subjects.",
      degree: "CBSE(X), Science with Sanskrit",
    },
  ];
  
   export const projects = [
    {
    id: 0,
    title: "Chess Game",
    description: `A real-time multiplayer chess game built with the MERN stack.
Supports two active players per match, with additional players entering spectator mode.
Automatically pairs new players into separate matches using Socket.io.
Implements game logic and rules using the Chess.js library for seamless gameplay.`,
    image:chesslogo ,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Socket.io", "MongoDB", "Express", "Node.js"],
    github: "https://github.com/yourusername/chess-game",
  },
    {
      id: 1,
      title: "NEP-Timetable 2020",
      description:
        "NEP Timetable ACE 2020 is a MERN-based automated timetable generator aligned with NEP 2020 guidelines manages student and course data while ensuring clash-free scheduling of subjects, teachers, and classrooms.Designed with a modern aurora UI effect, it provides a smooth and visually engaging user experience..",
      image: neptimetable,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","Aurora Effect"],
      github: "https://github.com/amritanshu2005/SIH-PROJECT",
    },
    {
      id: 2,
      title: "AI code Reviwer",
      description:
        "AI Code Reviewer is a MERN-based tool that uses the OpenAI API to analyze and review code instantly.It detects errors, bad practices, and logic issues, then explains the mistakes clearly.The app also provides corrected and optimized code, helping developers learn and improve faster.",
      image: codereviewer,
      tags: ["React JS", "OPENAI-API", "HTML", "CSS", "JavaScript","Node.js", "MongoDB", "Express",],
      github: "https://github.com/amritanshu2005/AI-CODE-REVIEWER",
    },
    {
      id: 3,
      title: "Auth Mern App",
      description:
        "Auth MERN App is a secure authentication system built using the MERN stack.It provides user signup and login with proper validation and protected routes.The UI features a smooth aurora-style gradient animation, making the auth experience visually engaging.",
      image:authmernlogo,
      tags: ["React JS", "Node.js", "NPM", "Aurora","MongoDB", "Express",],
      github: "https://github.com/amritanshu2005/MERN-LOGIN-SIGNUP",
    },
  ];  