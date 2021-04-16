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
  subtitle: 'Software Developer, JavaScript',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG-1973.JPG',
  paragraphOne:
    'Hi there! Software Developer here with a background working within a cross-functional team and serving a diverse clientele via cosmetology. Coupled with direct experience handling ambiguous client requests, aligning on requirements and delivering results tailored to suit their needs. Passionate about writing reliable, maintainable and testable code while always focusing on the end user',
  paragraphTwo:
    'With my past experience as a cosmetologist, I have learned the values of listening to customers, understanding their pain points which allowed me to help deliver the most value. In addition I lead training for all new hires which boosted monthly revenue, increased customer retention and reduced client churn for the salon. Through that I gained valuable skills in supporting a diverse clientele with efficient communication and a customer focused approach.',
  paragraphThree:
    'With values aligned I plan to use my skills plus past experiences to help your company go above and beyond in delivering solutions for users.',
  resume:
    'https://docs.google.com/document/d/1Dkmfmj82VrPs66ySFTUUpPHMnvHcyRn8d-t3gGSY6c8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'PPC.png',
    title: 'Parent Pickup Coordinator',
    info:
      'This is a full-stack application that links to a Socket.io and Express server with a React user-friendly frontend. The three combine to create an app to provide a more organized, streamlined process for elementary school parent pickup. Designed with Covid in mind to limit exposure between class/pod. This app uses MongoDB to store the data. Backend deployed to Heroku and frontend to Netlify. The app status changes via Socket.io rooms: Red indicates parent has arrived and green indicates child has left the classroom. ',
    info2:
      'Engineered by my team to deliver a service that is robust and extensible with scale in mind for future implementations.',
    url: 'https://parent-pickup-coordinator.netlify.app/',
    repo: 'https://github.com/parent-pickup-coordinator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cyber-range.png',
    title: 'Cyber Range',
    info:
      'Designed, built, and launched a cyber security educational app using scrum methodologies for the Code Fellows VP of Education. The app is currently being utilized in the Ops 101 course to teach penetration testing and ethical hacking. This platform gives a safe place to introduce people to the basics of how to hack. With my team, we created an environment for practicing hacking skills in: "cyber range". The core of the range is browser-based. The goal is to give people who are at the introductory knowledge level exposure to what is going on under the hood of their web browsers, and how it can be exploited.',
    info2:
      '', 
    url: 'https://codefellows.github.io/cyber-range/',
    repo: 'https://github.com/codefellows/cyber-range', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'mod-s.png',
    title: 'Module Docs Support',
    info:
      'Engineered a streamlined NPM package command line Interface tool by designing and building a back-end service in collaboration with a team of four developers. To solve a pain point for developers in search of frequently used module documentation. ',
    info2: 'Features include a Command Line Interface that allows the user to request the documentation for an assortment of documentation modules. The CLI will open the users default browser on selection and display the requested documentation. Developers/users are encouraged to contribute to this package and help easy that google rabbit hole for other developers. To install our npm package Mod-Support, simply enter ($ npm install -g mod-support) into your terminal of choice. (-g) will install globally.',
    url: 'https://www.npmjs.com/package/mod-support',
    repo: 'https://github.com/Mod-s/module-docs-support', // if no repo, the button will not show up
  },    
];

// The app is composed of 3 scenarios. First, covering base64 transcoding reference site and DOM-based modification of CSS visibility. The second HTML button elements, submit event explainer, event targets, event listeners, modals, window setTimeout() method and implementing modals across JavaScript, HTML, and CSS design. The third scenario features modal design, file linking through HTML, managing overlapping text, text centering and design.

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
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/stacyjane',
    // },
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
