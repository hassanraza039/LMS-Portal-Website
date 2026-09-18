import { NavLink, Outlet, useParams, Link } from "react-router-dom";
import { MessageSquare, Users, CalendarCheck, FileText, ClipboardCheck, TrendingUp } from "lucide-react";
import { courses } from "../../../data/mockData";
import "./course.css";

const tabs = [
  { to: "", end: true, label: "Students", icon: <Users size={16} /> },
  { to: "attendance", label: "Attendance", icon: <CalendarCheck size={16} /> },
  { to: "assignments", label: "Assignments", icon: <FileText size={16} /> },
  { to: "quizzes", label: "Quizzes", icon: <ClipboardCheck size={16} /> },
  { to: "course-progress", label: "Course Progress", icon: <TrendingUp size={16} /> },
];

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId) || courses[0];

  return (
    <div>
      <div className="course-topbar">
        <div className="breadcrumb">
          <Link to="/teacher">Dashboard</Link>
          <span>›</span>
          <strong>{course.title}</strong>
        </div>
        <button className="feedback-btn">
          <MessageSquare size={15} /> Feedback
        </button>
      </div>

      <h1 className="course-title">{course.title}</h1>

      <div className="course-tabs">
        {tabs.map((t) => (
          <NavLink key={t.label} to={t.to} end={t.end} className={({ isActive }) => `course-tab ${isActive ? "is-active" : ""}`}>
            {t.icon}
            {t.label}
          </NavLink>
        ))}
      </div>

      <div className="course-tab-panel">
        <Outlet context={{ course }} />
      </div>
    </div>
  );
}
