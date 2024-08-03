export interface ITimelineItem {
  time: string;
  title: string;
  descriptions: string[];
  technologies: string[];
}

export const timelineList: ITimelineItem[] = [
  {
    time: "10/2023 - 08/2024",
    title: "BMD SOLUTIONS - Junior React Developer",
    technologies: [
      "ReactJS 18",
      "Typescript",
      "MobX",
      "Ant Design",
      "TailwindCss",
    ],
    descriptions: [
      "Proficient in React v18, Typescript, Ant Design, MomentJs, Scss, TailwindCss, and other React UI libraries including React-big-calendar and ExcelJs.",
      "Specialized in developing admin websites for Booking Systems (Spa, Hospital, Hotel), and marketplace platforms. Notable projects include Fclass, Vitadairy, and Joy Bookie, where I gained experience in working with tables, forms, and data display.",
      "Regularly utilize custom hooks for efficient data handling, along with common hooks such as useState, useRef, useMemo, useCallback, useImperativeHandle, and useEffect.",
      "Collaborate closely with a leader who is also responsible in Backend to brainstorm ideas and solutions for optimizing module performance and enhancing UI aesthetics",
      "Participate in daily meetings with team members to review progress, discuss ongoing tasks, troubleshoot challenges, and devise solutions.",
      "Frequently engage with clients to gather feedback on software UI/ UX and improvements, ensuring that their needs and concerns are addressed effectively.",
    ],
  },
  {
    time: "10/2022 - 06/2023",
    title: "VAN LANG UNIVERSITY ( GRADUATE PROJECT ) - React Developer",
    technologies: [
      "ReactJS 18",
      "Typescript",
      "Material UI",
      "Redux Thunk",
      "TailwindCss",
    ],
    descriptions: [
      "Working with React v18 and Typescript, TailwindCss, Material UI, RESTful API.",
      "Creating custom axios requests ( handle requests, expire token with interceptor).",
      "Managing asynchorous actions and global states with Redux thunk.",
      "My role was a team leader and a Frontend developer. I lead my team ( 6 people) and got a pretty high grade as 8.0 .",
      "Come up with plan and schedule suiltable date with customer to discuss what will do next, review the progress and also organizing daily meeting with team mates",
    ],
  },
  {
    time: "10/2022 - 06/2023",
    title: "LOTTE MART HEAD OFFICE - O4O CHANNEL - INTERNSHIP OF SUPPORTING ON RUNNING TFT SYSTEM",
    technologies: [
      "NodeJS",
      "Puppeteer",
      "HTML, CSS",
      "Mailchimp",
    ],
    descriptions: [
      "Crawling Data from retail competitors ( using NodeJS, Puppeteer).",
      "Coding marketing mail ( Html, CSS, Mailchimp).",
    ],
  },
  {
    time: "07/2022 - 10/2022",
    title: "CÔNG TY CỔ PHẦN KỶ NGUYÊN SỐ - Intern React Developer",
    technologies: [
      "ReactJS 18",
      "Typescript",
      "Material UI",
      "Redux Thunk",
      "TailwindCss",
    ],
    descriptions: [
      "Using React, Redux Thunk to manage asynchronous actions.",
      "Combine RESTful API and Ant Design to get and put data on UI",
      "Managing asynchorous actions and global states with Redux thunk."
    ],
  },
];
