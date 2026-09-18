import { Outlet } from "react-router-dom";
import { LayoutGrid, GraduationCap, Users } from "lucide-react";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../styles/portal.css";

const items = [
  { to: "/admin", end: true, label: "Dashboard", icon: <LayoutGrid size={18} /> },
  { to: "/admin/students", label: "Manage Students", icon: <GraduationCap size={18} /> },
  { to: "/admin/teachers", label: "Manage Teachers", icon: <Users size={18} /> },
];

export default function AdminLayout() {
  return (
    <div className="portal-layout">
      <Sidebar brand="SLMS" items={items} />
      <div className="portal-content">
        <Outlet />
      </div>
    </div>
  );
}
