import { useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const ROLE_CONFIG = {
  student: {
    label: "Student",
    heading: "Student login",
    hint: "Log in to see your attendance, assignments, quizzes and fee status.",
    portal: "/student",
  },
  teacher: {
    label: "Teacher",
    heading: "Teacher login",
    hint: "Log in to view your batches, student records and course progress.",
    portal: "/teacher",
  },
  admin: {
    label: "Admin",
    heading: "Admin login",
    hint: "Log in to manage student and teacher records across the institute.",
    portal: "/admin",
  },
};

export default function Login() {
  const { role } = useParams();
  const config = ROLE_CONFIG[role] || ROLE_CONFIG.student;
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Enter both email and password.");
      return;
    }
    setError("");
    const name = email.split("@")[0];
    login(role, name);
    const redirectTo = location.state?.from?.pathname;
    navigate(redirectTo && redirectTo.startsWith(config.portal) ? redirectTo : config.portal, {
      replace: true,
    });
  }

  return (
    <main className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <div className="login__switch">
          {Object.entries(ROLE_CONFIG).map(([key, cfg]) => (
            <Link
              key={key}
              to={`/login/${key}`}
              className={`login__switch-tab ${key === role ? "is-active" : ""}`}
            >
              {cfg.label}
            </Link>
          ))}
        </div>

        <h1>{config.heading}</h1>
        <p className="login__hint">{config.hint}</p>

        <label className="login__field">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={`you@saylani.edu`}
          />
        </label>

        <label className="login__field">
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        {error && <p className="login__error">{error}</p>}

        <button type="submit" className="login__submit">
          Log in as {config.label}
        </button>

        <p className="login__note">
          Demo login — any email and password works, access is locked to the {config.label} portal only.
        </p>
      </form>
    </main>
  );
}
