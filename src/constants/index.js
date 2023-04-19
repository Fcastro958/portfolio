import {
  adoptme,
  anonymous,
  wise1,
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
      " Fernando Castor has distinguished himself as a superior Marine for his rank and experience. I have observed this Marine performing his duties while filling the billet of Team Leader for Bravo Battery, 3rd LAAD Battalion. Fernando's maturity, knowledge, and drive to accomplish the mission are a matter of record. He is a superb Leader who takes rapid, effective action with minimal guidance. He works well guided by Commander's Intent and is a mastermind at problem-solving and seeing issues through to completion. Fernando is exceptionally well-rounded and has the mature judgment that will produce results for any team he is a part of.",
    name: "shane R. wise",
    designation: "Staff Sergeant",
    company: "United States Marine Corps",
    image: wise1,
  },
  {
    testimonial:
    `Fernando Castro was a member of my platoon for nearly two years. I watched him grow as a  Marine, leader, and man during our time together. Our platoon participated in a year-long workup as we prepared to deploy to the Indo-Pacific region. Fernando demonstrated the qualities many strive for but few embody throughout this period. Our platoon grew incredibly close, and Fernando quickly rose to a leadership position where he was responsible for four younger Marines and 75 thousand dollars worth of equipment. He proved that he is a tenacious mentor who consistently places the needs of others before his own. Fernando takes direction well, and when criticized for shortcomings – albeit rare – he rapidly corrects and eagerlyimproves. I watched Fernando tackle adverse situations enthusiastically and with honor on more than one occasion. He is unwilling to sacrifice his integrity and remains true to his moral belief system. Junior Marines looked up to him and earnestly sought to emulate his positive qualities. I wholeheartedly believe that Fernando safeguarded the Marine Corps Ethos and affected positive change throughout the ranks. Fernando is a strong communicator who keeps his leaders informed. He is a value-added team member and is vital to mission success. Our platoon&#39;s effectiveness was partly due to Fernando&#39;s efforts, tenacity, and positive influence. I am honored to know men like Fernando. Without him and those like him, I would have struggled immensely, and I am eternally grateful to have served with him. Wherever he goes, he will ensure success, and in doing so, those around him will accomplish great things.`,
    name: "P. M. H.",
    designation: "captain",
    company: "United States Marine Corps",
    image: anonymous,
  },
  {
    testimonial:
      `I had the pleasure of working with, at the time, Corporal Castro during this time together he
      demonstrated a high level of maturity and confidence in everything he did. While serving as his section
      leader whenever I needed any task done in a timely manner Corporal Castro was always my go to. Not
      only was he reliable but he was extremely trustworthy and always put junior Marines in the best
      situations possible. His daily positive attitude and excellent work ethic made it very easy for junior
      Marines to gravitate towards and want to emulate. Corporal Castro set the perfect example for his
      subordinates, peers, and superiors. I truly miss working with him and know that wherever he goes next
      will be lucky to have him.`,
    name: "Jaime Ortiz Flores",
    designation: "Staff Sergeant",
    company: "United States Marine Corps",
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
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/Fcastro958/Airbnb_Clone",
    live_link: "http://fake-airbnb.click/",
  },
  {
    name: "Adopt Me",
    description:
    "Adopt Me is an engaging React web application that utilizes the power of a mock API to display adoptable pets based on user-defined search parameters. This soon-to-be-real pet adoption platform is built using modern libraries such as React Query for data fetching, React Router for seamless navigation, and custom hooks for code reusability. The application is designed with a user-friendly interface to showcase pets' images, descriptions, and locations, with plans to integrate an actual adoption API, enabling users to adopt pets in real life. Key features include error handling, responsive design, and a smooth user experience, all intended to showcase a solid understanding of modern web development technologies and dedication to creating practical and meaningful applications.",
    tags: [
    {
    name: "React",
    color: "blue-text-gradient",
    },
    {
    name: "React Query",
    color: "green-text-gradient",
    },
    {
    name: "React Router",
    color: "pink-text-gradient",
    },
    ],
    image: adoptme,
    source_code_link: "https://github.com/Fcastro958/adoptme",
    live_link: "http://fernandoadoptme.click/",
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
    live_link: "https://www.google.com/",
  },
  {
    name: "Chrono Beats",
    description:
      "ChronoBeats is a music database system designed to mimic popular music consumption applications such as Spotify and iTunes. The project involved a thorough evaluation of database solutions, comparing Postgres and MongoDB through load, spike, soak, and stress testing using the k6 testing tool. Postgres was ultimately chosen due to its 27% faster response time and lower failure rate across all test scenarios. The system was implemented using modular and containerized components with Docker, allowing for efficient testing of various database solutions and architectures without disrupting production services.",
    tags: [
      {
        name: "mongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "K6",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "pink-text-gradient",
      },
    ],
    image: database,
    source_code_link: "https://github.com/Fcastro958/admissions-hub",
    live_link: "https://www.google.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
