import {
  g,
  marines,
  database,
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
  shopify,
  airbnb,
  threejs,
  admission,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Team Manager",
    company_name: "United States Marine Corps",
    icon: marines,
    iconBg: "#383E56",
    date: "February 2019 - February 2023",
    points: [
      "Demonstrated exceptional leadership and organizational skills in managing a diverse team of 20 technical experts, streamlining operations and increasing overall team efficiency in both domestic and international settings.",
      "Pioneered and implemented innovative training programs, equipping over 100 personnel with cutting-edge technology best practices, resulting in a 75% promotion rate for lower-level employees and increased team performance.",
      "Successfully coordinated cross-departmental efforts to create a comprehensive, ongoing training program, strengthening relationships with foreign and domestic partners and enhancing overall organizational capabilities.",
      "Recognized and rewarded for outstanding performance in both technical expertise and team management, fostering a culture of continuous learning, professional growth, and effective collaboration within the Marine Corps.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Galvanize",
    icon: g,
    iconBg: "#E6DEDD",
    date: "August 2022 - February 2023",
    points: [
      "Completed an intensive 18-week Advanced Software Engineering Immersive program, dedicating over 1000+ hours to mastering full-stack development, including JavaScript, React, Express, PostgreSQL, MongoDB, and MySQL.",
      "Gained hands-on experience in Agile methodologies, working collaboratively in team environments and effectively managing sprints, user stories, and backlog items to deliver high-quality software products.",
      "Developed a strong foundation in modern web development tools and practices, including front-end and back-end technologies, testing and deployment strategies, and cloud services.",
      "Enhanced problem-solving, critical thinking, and adaptability skills by working on a variety of challenging projects, demonstrating the ability to quickly learn and apply new concepts and technologies to deliver innovative software solutions.",
    ],
  },
  {
    title: " Independent Software Developer (Self-employed)",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2022 - present",
    points: [
      "Consistently work on personal projects to enhance technical skills and develop a diverse portfolio showcasing expertise in various programming languages and frameworks.",
      "Actively engage in self-directed learning to stay up-to-date with the latest industry trends and best practices, including attending webinars, workshops, and online courses.",
      "Utilize networking opportunities to build relationships with professionals in the field, participate in coding meetups, and collaborate on open-source projects.",
      "Effectively manage time and resources to balance ongoing personal projects, professional development, and networking activities",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Airbnb Clone",
    description:
      "Developed a full-stack UI clone of Airbnb's 'item detail page' using React, JavaScript, CSS3, HTML5, and Bootstrap, focusing on accurate design and functionality. Implemented key features, performed API requests, and ensured a seamless user experience while improving individual skills in collaboration and communication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/Fcastro958/Airbnb_Clone",
  },
  {
    name: "Admission hub",
    description:
    "Enhanced an existing full-stack application for interviewers to manage student data and conduct live coding interviews, by fixing numerous bugs and improving functionality. The revamped platform, built with NextJS, React, Node.js, and socket.io, offers secure authentication, profile management, real-time collaboration, and features for tracking interview performance statistics and automating testing.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "Puppeteer",
        color: "pink-text-gradient",
      },
    ],
    image: admission,
    source_code_link: "https://github.com/Fcastro958/admissions-hub",
  },
  {
    name: "Chrono Beats",
    description:
      "Enhanced an existing full-stack application for interviewers to manage student data and conduct live coding interviews, by fixing numerous bugs and improving functionality. The revamped platform, built with NextJS, React, Node.js, and socket.io, offers secure authentication, profile management, real-time collaboration, and features for tracking interview performance statistics and automating testing.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: database,
    source_code_link: "https://github.com/Fcastro958/admissions-hub",
  },
];

export { services, technologies, experiences, testimonials, projects };
