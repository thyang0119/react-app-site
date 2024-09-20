/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Tesla Inc',
    position: 'Software Engineer',
    url: 'https://www.tesla.com/energy/design',
    startDate: '2021-02-11',
    endDate: '2024-06-14',
    summary: `As a critical member of Tesla’s Energy Fulfillment team, 
      I played a central role in the development of a cutting-edge web platform that allows customers to select and customize Tesla’s solar energy products. 
      The platform not only guides users through the process of choosing solar solutions but also offers comprehensive post-purchase support services to ensure a smooth transition from product selection to installation. 
      My work has consistently focused on delivering intuitive, scalable, and high-performing front-end solutions that enhance both pre- and post-purchase customer experiences.`,
    highlights: [
      'Led the redesign of Tesla’s solar product website to streamline customer navigation through the home assessment, self-design, purchase, loan, and installation journey.',
      'Utilized ReactJS, Redux, ES6, CSS3, HTML5 to design and implement reusable components and workflows, including a customer self-design workflow, product comparison page, management of loans with payment function, etc.',
      'Initiated and implemented the energy product fulfillment workflow in the Tesla mobile app using TypeScript and React Native, empowering users to manage their homes via mobile devices.',
      'Collaborated with other teams to integrate their components and features into the mobile app, such as the payment and self-design layout function, ensuring a seamless and comprehensive user experience.',
      'Developed the BFF using Node.js to connect the mobile app of the energy product to other microservices API gateways.',
      'Ensured consistent performance by initiating unit tests using Jest and contributed to automation tests using Appium.',
      'Leveraged Sentry, Splunk to monitor the daily performance of the website, facilitating bug detection and resolution.',
      'Increased website deployment speed by 20% through optimizing Frontend and Backend with LaunchDarkly.',
    ],
  },
  {
    name: 'Ryzlinke America',
    position: 'Software Engineer',
    // url: 'http://skepticalinvestments.biz',
    startDate: '2020-07-20',
    endDate: '2021-02-13',
    summary: `At Ryzlinke America, 
      I contributed to the development of internal tools that improved efficiency in managing human resources and employee access. 
      As part of a small, highly collaborative team, I worked on creating and maintaining a full-stack web application that supports core HR processes, 
      focusing on building robust, scalable systems using modern JavaScript technologies. My role involved both frontend and backend development, 
      as well as database management and API creation.`,
    highlights: [
      'Developed an internal HR website for the company to manage human resources and grant access to employees, with ongoing maintenance to add features like filtering and UI changes.',
      'Implemented the website using JavaScript, ReactJS, HTML, and CSS, aimed at facilitating internal processes efficiency.',
      'Set up a Backend for frontend (BFF) connecting the Frontend UI and database using Express and Node.js and interacted with the NoSQL Database MongoDB to store and retrieve data efficiently.',
      'Implemented the commonly shared microservices utilizing Node.js, Express.js, MongoDB, and Mongoose to establish a complete MERN stack and provide RESTful API services.',
    ],
  },
];

export default work;
