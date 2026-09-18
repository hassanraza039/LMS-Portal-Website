import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Nav.css";

const PORTAL_LABEL = {
  student: "Student Portal",
  teacher: "Teacher Portal",
  admin: "Admin Portal",
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    setOpen(false);
    navigate("/");
  }

  return (
    <header className="nav">
      <div className="nav__inner container">
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">S</span>
          <span className="nav__brand-text">
            Saylani <em>LMS</em>
          </span>
        </Link>

        <button
          className={`nav__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "is-open" : ""}`}>
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>

          {user ? (
            <>
              <NavLink to={`/${user.role}`} onClick={() => setOpen(false)}>
                {PORTAL_LABEL[user.role]}
              </NavLink>
              <span className="nav__user">
                {user.name} · <span className="nav__role">{user.role}</span>
              </span>
              <button className="nav__cta nav__logout" onClick={handleLogout}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login/student" onClick={() => setOpen(false)}>
                Student Login
              </NavLink>
              <NavLink to="/login/teacher" onClick={() => setOpen(false)}>
                Teacher Login
              </NavLink>
              <Link to="/login/admin" className="nav__cta" onClick={() => setOpen(false)}>
                Admin Login
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
