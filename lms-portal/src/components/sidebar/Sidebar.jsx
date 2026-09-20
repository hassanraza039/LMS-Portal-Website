import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./Sidebar.css";

export default function Sidebar({ brand, items }) {
  // Desktop: sidebar can be collapsed to icons only.
  const [collapsed, setCollapsed] = useState(false);
  // width animation only after the user has toggled the collapse button
  const [animated, setAnimated] = useState(false);
  // Mobile / tablet: sidebar becomes an off-canvas drawer.
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const initials = (user?.name || "U")
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  // Lock page scroll + close on Escape while the drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // If the screen grows back to desktop size, make sure the drawer state is reset.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 901px)");
    const onChange = (e) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function handleLogout() {
    setMobileOpen(false);
    logout();
    navigate("/");
  }

  return (
    <>
      {/* Top bar — only visible on mobile / tablet */}
      <header className="mobile-bar">
        <button
          className="mobile-bar__menu"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="portal-sidebar"
        >
          <Menu size={22} />
        </button>
        <div className="mobile-bar__brand">
          <span className="side__brand-mark">{brand?.[0] || "S"}</span>
          <span className="side__brand-text">{brand}</span>
        </div>
        <span className="side__avatar" title={user?.name}>{initials}</span>
      </header>

      <div
        className={`side-overlay ${mobileOpen ? "is-open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="portal-sidebar"
        className={`side ${collapsed ? "is-collapsed" : ""} ${animated ? "is-animated" : ""} ${mobileOpen ? "is-open" : ""}`}
      >
        <div className="side__top">
          <div className="side__brand">
            <span className="side__brand-mark">{brand?.[0] || "S"}</span>
            <span className="side__brand-text">{brand}</span>
          </div>
          <button
            className="side__collapse"
            onClick={() => {
              setAnimated(true);
              setCollapsed((c) => !c);
            }}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
          <button
            className="side__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="side__list">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => `side__link ${isActive ? "is-active" : ""}`}
                title={item.label}
                onClick={() => setMobileOpen(false)}
              >
                <span className="side__icon">{item.icon}</span>
                <span className="side__label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="side__footer">
          <span className="side__avatar">{initials}</span>
          <span className="side__footer-text">{user?.name || "User"}</span>
          <button className="side__logout" onClick={handleLogout} aria-label="Log out" title="Log out">
            <LogOut size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
