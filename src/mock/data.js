import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Stacy Burris | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Stacy Burris',
  subtitle: 'Full-Stack JavaScript Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG-1973.JPG',
  paragraphOne:
    'Hi my name is Stacy Burris and I am a full stack software developer with a past in cosmetology. Life has an exceptional way of guiding your future. In mine I have found that my creativity can flow into technology with bringing a unique perspective. I have discovered an interest in coding and the challenges that it brings. I am a hard worker, with grit and gut, who enjoy working in teams to help achieve user-centric solutions.',
  paragraphTwo:
    'With my past experience as a cosmetologist, I have learned the values of listening to customers, understanding their pain points which allowed me to help deliver the most value. In addition I lead training for all new hirees and continuing education courses to help the business stay ahead. Through that I gained valuable skills in supporting a diverse clientele with efficient communication and a customer focused approach.',
  paragraphThree:
    'With values aligned I plan to use my skills plus past experiences to help your company go above and beyond in delivering solutions for users.',
  resume:
    'https://docs.google.com/document/d/1Dc8dYZIOitKd_y5Px7RLImjkntwNYaeX6S8oanhVFdk/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ParentPickup.png',
    title: 'Parent Pickup Coordinator',
    info:
      'Front end application that links to a socket.io server and a express backend server. The three combine to create an app to provide a more organized, streamlined way of teachers being notified it’s time to send a child out when their ride arrives. Designed for principals, facilty and parents to ensure limited exposure between students (during Covid) and will help schools coordinate parent pickup at the end of the school day. This app uses Mongodb to store the data and is deployed backend to Heroku and frontend to Netlify. The app status changes via socket.io rooms: Red indicates parent has arrived and green indicates child has left the classroom.',
    info2:
      'Future goals for this app include: Ability to send multiple notifications: Bus (yellow), and if multiple siblings go to the same school, send out all siblings. Administrative login and authorization. Full React Native Mobile App/Custom QR Code Generator. Pickup Permissions (make sure it\'s a parent!). Teacher communication to principal and a method of looking up student name if parent doesn\'t remember ID',
    url: 'https://parent-pickup-coordinator.netlify.app/',
    repo: 'https://github.com/parent-pickup-coordinator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cyber-range.png',
    title: 'Cyber Range',
    info:
      'Code Fellows wants to reinvent the Ops course to be tailored towards penetration testing and ethical hacking. To this end, at the 101 level, they want to introduce people to the basics of how to hack. They want to create a safe environment for practicing hacking skills--a "cyber range" as it were.',
    info2:
      'The core of the range is browser-based. The goal is to give people who are at the introductory knowledge level exposure to what is going on under the hood of their web browsers, and how it can be exploited.',
    url: 'https://codefellows.github.io/cyber-range/',
    repo: 'https://github.com/codefellows/cyber-range', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mod-support.png',
    title: 'Module Docs Support',
    info:
      'A Command Line Interface that allows the user to request the docs for an assortment of Node Modules. The CLI will open the users default browser and display the requested documentation. Developers can install our npm package Mod-Support ($ npm install -g mod-support. ',
    info2: 'Node Package Manager or npm is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client and online database packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched on the npm website.',
    url: 'https://www.npmjs.com/package/mod-support',
    repo: 'https://github.com/Mod-s/module-docs-support', // if no repo, the button will not show up
  },    
];


// speakeasier 
// Clean and simple travel app packed with user-friendly features! This is a lightweight, full-stack web application. Users have the ability to search for any location and save them to two different places. Boarding is a wish list page where you can save places you would like to visit and stamped is a list of places you have been.

// This information is piped from the Google Knowledge API, or application program interface. This API, though skimpy on details, is vast in its collection of locations, as well as relatively simple to access, being keyless.Languages: HTML, CSS, JavaScript, SQL. Libraries and Frameworks: Express, PostgreSQL, PG, jQuery, EJS, Superagent, Dotenv, Cors, Method Override, Nodemon.

// CONTACT DATA
export const contactData = {
  cta: 'Connect With Me',
  btn: 'Email',
  email: 'stacy1burris@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/stacyjaneb',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/stacyjane',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stacyjburris/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/stacyburris',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
