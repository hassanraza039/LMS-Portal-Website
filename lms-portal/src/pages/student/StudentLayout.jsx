import { Outlet } from "react-router-dom";
import { LayoutGrid, TrendingUp, CalendarCheck, CreditCard, FileText, HelpCircle } from "lucide-react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../styles/portal.css";

const items = [
  { to: "/student", end: true, label: "Dashboard", icon: <LayoutGrid size={18} /> },
  { to: "/student/course-progress", label: "Progress", icon: <TrendingUp size={18} /> },
  { to: "/student/attendance", label: "Attendance", icon: <CalendarCheck size={18} /> },
  { to: "/student/payment", label: "Payment", icon: <CreditCard size={18} /> },
  { to: "/student/assignments", label: "Assignment", icon: <FileText size={18} /> },
  { to: "/student/quiz", label: "Quiz", icon: <HelpCircle size={18} /> },
];

export default function StudentLayout() {
  return (
    <div className="portal-layout">
      <Sidebar brand="SLMS" items={items} />
      <div className="portal-content">
        <Outlet />
      </div>
    </div>
  );
}
