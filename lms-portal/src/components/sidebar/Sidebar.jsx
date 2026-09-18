import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

export default function Sidebar({ brand, items }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const initials = (user?.name || "U")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <aside className={`side ${collapsed ? "is-collapsed" : ""}`}>
      <div className="side__top">
        <div className="side__brand">
          <span className="side__brand-mark">{brand?.[0] || "S"}</span>
          {!collapsed && <span className="side__brand-text">{brand}</span>}
        </div>
        <button
          className="side__collapse"
          onClick={() => setCollapsed((c) => !c)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      <ul className="side__list">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => `side__link ${isActive ? "is-active" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <span className="side__icon">{item.icon}</span>
              {!collapsed && item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="side__footer">
        <span className="side__avatar">{initials}</span>
        {!collapsed && (
          <span className="side__footer-text">{user?.name || "User"}</span>
        )}
        <button className="side__logout" onClick={handleLogout} aria-label="Log out" title="Log out">
          <LogOut size={16} />
        </button>
      </div>
    </aside>
  );
}
