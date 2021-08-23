import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Julie UGOLOTTI',
  subtitle: 'and I am a Graphic Designer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  };

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: '2.png',
    title: 'Square Brochure',
    info: 'This project was about the design of a square brochure for the Suez Group to show their expertise in different fields',
    info2: '',
   },
  {
    id: nanoid(),
    img: 'palme1.jpg',
    title: 'Brochure',
    info: 'This project was about the creation for a brochure for a french health company to prevent from the dangers of palm oil.',
    info2: '',
  },
  {
    id: nanoid(),
    img: 'poliris.jpg',
    title: 'Real Estate Brochure',
    info: 'I have designed this brochure for a french real estate company to present their different offers to their customers.',
    info2: '',
  },
  {
    id: nanoid(),
    img: 'UIUX.png',
    title: 'Website UI prototype',
    info: 'I have create this prototype for a fake company as a school projet during my program at Humber College. I have learned how to design and create a prototype for websites and Mobile Applications.',
    info2: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'julie.ugolotti@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'linkedin.com/julieugolotti',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Julie-u',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
