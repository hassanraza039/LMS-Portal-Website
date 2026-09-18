export const courses = [
  { id: "c1", title: "Web Development", teacher: "Ahmed Raza", students: 42, progress: 68 },
  { id: "c2", title: "Graphic Designing", teacher: "Sana Malik", students: 35, progress: 45 },
  { id: "c3", title: "App Development", teacher: "Ahmed Raza", students: 28, progress: 80 },
  { id: "c4", title: "Digital Marketing", teacher: "Bilal Khan", students: 50, progress: 30 },
];

export const students = [
  { id: "s1", name: "Hassan Ali", course: "Web Development", attendance: 92, assignmentsDone: 9, assignmentsTotal: 10, quizAvg: 85, feeStatus: "Paid" },
  { id: "s2", name: "Ayesha Siddiqui", course: "Web Development", attendance: 78, assignmentsDone: 7, assignmentsTotal: 10, quizAvg: 74, feeStatus: "Pending" },
  { id: "s3", name: "Zain Abbas", course: "App Development", attendance: 88, assignmentsDone: 10, assignmentsTotal: 10, quizAvg: 91, feeStatus: "Paid" },
  { id: "s4", name: "Mahnoor Fatima", course: "Graphic Designing", attendance: 65, assignmentsDone: 5, assignmentsTotal: 10, quizAvg: 60, feeStatus: "Overdue" },
  { id: "s5", name: "Usman Tariq", course: "Digital Marketing", attendance: 95, assignmentsDone: 8, assignmentsTotal: 10, quizAvg: 79, feeStatus: "Paid" },
];

export const teachers = [
  { id: "t1", name: "Ahmed Raza", courses: ["Web Development", "App Development"], students: 70, rating: 4.8 },
  { id: "t2", name: "Sana Malik", courses: ["Graphic Designing"], students: 35, rating: 4.6 },
  { id: "t3", name: "Bilal Khan", courses: ["Digital Marketing"], students: 50, rating: 4.5 },
];

export const attendanceLog = [
  { date: "2026-09-08", status: "Present" },
  { date: "2026-09-09", status: "Present" },
  { date: "2026-09-10", status: "Absent" },
  { date: "2026-09-11", status: "Present" },
  { date: "2026-09-12", status: "Present" },
  { date: "2026-09-14", status: "Leave" },
  { date: "2026-09-15", status: "Present" },
];

export const assignments = [
  { id: "a1", title: "Responsive Portfolio Site", course: "Web Development", due: "2026-09-18", status: "Submitted", grade: "A" },
  { id: "a2", title: "REST API with Node.js", course: "Web Development", due: "2026-09-22", status: "Pending", grade: null },
  { id: "a3", title: "Wireframe Case Study", course: "Web Development", due: "2026-09-10", status: "Graded", grade: "B+" },
  { id: "a4", title: "React State Management", course: "Web Development", due: "2026-09-05", status: "Graded", grade: "A-" },
];

export const quizzes = [
  { id: "q1", title: "HTML & CSS Basics", score: 18, total: 20, date: "2026-08-20" },
  { id: "q2", title: "JavaScript Fundamentals", score: 15, total: 20, date: "2026-09-02" },
  { id: "q3", title: "React Hooks", score: 17, total: 20, date: "2026-09-12" },
];

export const payments = [
  { id: "p1", month: "July 2026", amount: 5000, status: "Paid", date: "2026-07-03" },
  { id: "p2", month: "August 2026", amount: 5000, status: "Paid", date: "2026-08-04" },
  { id: "p3", month: "September 2026", amount: 5000, status: "Pending", date: "-" },
];

// ---------- Trainer / course-detail data (matches SMIT trainer portal) ----------

const firstNames = ["Ahmed", "Hassan", "Ayesha", "Zainab", "Bilal", "Sara", "Usman", "Mahnoor", "Zain", "Fatima", "Ali", "Hira", "Talha", "Areeba", "Danish", "Komal", "Saad", "Iqra", "Faizan", "Noor", "Hamza", "Sana", "Umar", "Laiba"];
const lastNames = ["Khan", "Raza", "Siddiqui", "Malik", "Abbas", "Tariq", "Iqbal", "Sheikh", "Qureshi", "Farooq"];

export const courseStudents = Array.from({ length: 24 }, (_, i) => {
  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`;
  return {
    id: `st${i + 1}`,
    name,
    roll: `${467900 + i}`,
    email: `${name.toLowerCase().replace(" ", ".")}@gmail.com`,
    status: "Enrolled",
  };
});

export const attendanceStatuses = ["Not Marked", "Present", "Absent", "Leave"];

export const courseAssignments = [
  {
    id: "as1",
    title: "Admin panel (E-commerce)",
    description: "Create the provided UI design in React or Next.js.",
    topics: ["NextJS", "ReactJS Introduction", "+5"],
    dueDate: "Sep 10, 2026",
  },
  {
    id: "as2",
    title: "QUICKSERVE WMA (Batch-20)",
    tag: "HACKATHON",
    description: "Challenge: Build a modern service-booking web application that connects customers with providers.",
    topics: [],
    dueDate: "Aug 30, 2026",
  },
  {
    id: "as3",
    title: "E-Commerce Website",
    description: "React.js frontend — create all required e-commerce pages and components.",
    topics: ["ReactJS Introduction", "Components, Props", "+2"],
    dueDate: "Aug 17, 2026",
  },
  {
    id: "as4",
    title: "Furniture E-Commerce",
    description: "Follow the Figma design. (https://www.figma.com/design/X...)",
    topics: ["JavaScript Book Concepts", "Github", "+3"],
    dueDate: "Aug 10, 2026",
  },
  {
    id: "as5",
    title: "MaintainIQ (Batch-20)",
    tag: "HACKATHON",
    description: "MaintainIQ — build a predictive maintenance dashboard for facility teams.",
    topics: [],
    dueDate: "Jul 12, 2026",
  },
  {
    id: "as6",
    title: "JavaScript Assignment",
    description: "Complete all 25 JavaScript questions available at the link.",
    topics: ["JavaScript Introduction", "JavaScript Chapter 2", "+6"],
    dueDate: "Jul 10, 2026",
  },
  {
    id: "as7",
    title: "Budgetting App",
    description: "Develop a fully responsive and functional Budgeting Web App.",
    topics: ["JavaScript Chapter 3", "+10"],
    dueDate: "Jun 1, 2026",
  },
  {
    id: "as8",
    title: "Amazon Clone",
    description: "Create a fully responsive landing page inspired by the official Amazon site.",
    topics: ["HTML Text", "HTML Images", "+13"],
    dueDate: "May 24, 2026",
  },
  {
    id: "as9",
    title: "NASA Landing Page",
    description: "Create a fully responsive landing page inspired by the official NASA site.",
    topics: ["Media Queries", "HTML Text", "+7"],
    dueDate: "May 1, 2026",
  },
  {
    id: "as10",
    title: "Helplytics AI – Competition",
    tag: "HACKATHON",
    description: "SMIT GRAND CODING NIGHT - April 2026 challenge submission.",
    topics: [],
    dueDate: "Apr 19, 2026",
  },
  {
    id: "as11",
    title: "Portfolio Website",
    description: "Design and build a personal portfolio site showcasing 3 projects.",
    topics: ["HTML Text", "CSS Flexbox", "+2"],
    dueDate: "Mar 15, 2026",
  },
  {
    id: "as12",
    title: "Weather App",
    description: "Consume a public weather API and display a 5-day forecast.",
    topics: ["Fetch API", "JavaScript Chapter 4"],
    dueDate: "Feb 20, 2026",
  },
  {
    id: "as13",
    title: "To-Do List App",
    description: "Build a to-do list with add, edit, delete and local storage support.",
    topics: ["DOM Manipulation", "+1"],
    dueDate: "Jan 28, 2026",
  },
];

export const courseQuizzes = [
  {
    id: "qz1",
    title: "Javascript (Quiz-4)",
    courses: ["Modern Web Application Development", "Web and Mobile App Development"],
    date: "Jun 24, 2026",
    expiry: "Jun 24, 2026",
    status: "Active",
  },
  {
    id: "qz2",
    title: "Javascript (Quiz-3)",
    courses: ["Modern Web Application Development", "Web and Mobile App Development"],
    date: "Jun 3, 2026",
    expiry: "Jun 3, 2026",
    status: "Active",
  },
  {
    id: "qz3",
    title: "Javascript (Quiz-2)",
    courses: ["Modern Web Application Development", "Web and Mobile App Development"],
    date: "May 18, 2026",
    expiry: "May 18, 2026",
    status: "Active",
  },
  {
    id: "qz4",
    title: "Javascript (Quiz-1)",
    courses: ["Modern Web Application Development", "Web and Mobile App Development", "JavaScript Crash Course", "+1"],
    date: "Apr 17, 2026",
    expiry: "Apr 17, 2026",
    status: "Active",
  },
  {
    id: "qz5",
    title: "CSS Quiz",
    courses: ["Modern Web Application Development", "Web & Mobile Application Development (Female)", "+3"],
    date: "Mar 27, 2026",
    expiry: "Mar 27, 2026",
    status: "Active",
  },
  {
    id: "qz6",
    title: "HTML Quiz",
    courses: ["Modern Web Application Development", "Web & Mobile Application Development (Female)", "+4"],
    date: "Jan 7, 2026",
    expiry: "Jan 7, 2026",
    status: "Active",
  },
  {
    id: "qz7",
    title: "HTML Quiz",
    courses: ["Modern Web Application Development", "Web & Mobile Application Development (Female)", "+4"],
    date: "Jan 5, 2026",
    expiry: "Jan 5, 2026",
    status: "Active",
  },
];

export const courseModules = [
  { id: "m1", name: "Web Designing", topicsDone: 20, topicsTotal: 20 },
  { id: "m2", name: "Front-End Development", topicsDone: 26, topicsTotal: 31 },
  { id: "m3", name: "Modern Front-End Development", topicsDone: 10, topicsTotal: 14 },
  { id: "m4", name: "Back-End Development", topicsDone: 0, topicsTotal: 16 },
];

