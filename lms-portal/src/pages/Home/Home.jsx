import { Link } from "react-router-dom";
import { courses } from "../../data/mockData";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero container">
        <div className="hero__text">
          <p className="hero__eyebrow">Saylani Learning Management System</p>
          <h1 className="hero__title">
            One roll number,
            <br />
            three ways to see it.
          </h1>
          <p className="hero__sub">
            Students track attendance, assignments and quizzes in one place.
            Teachers see who's falling behind before it's too late. Admins keep
            every batch, fee and faculty record straight — without three
            separate spreadsheets.
          </p>
          <div className="hero__ctas">
            <Link to="/login/student" className="btn btn--gold">
              Student Login
            </Link>
            <Link to="/login/teacher" className="btn btn--outline">
              Teacher Login
            </Link>
            <Link to="/login/admin" className="btn btn--outline">
              Admin Login
            </Link>
          </div>
        </div>

        <div className="hero__panel">
          <div className="ledger">
            <div className="ledger__row ledger__row--head">
              <span>Course</span>
              <span>Teacher</span>
              <span>Progress</span>
            </div>
            {courses.map((c) => (
              <div className="ledger__row" key={c.id}>
                <span>{c.title}</span>
                <span>{c.teacher}</span>
                <span className="ledger__bar-wrap">
                  <span className="ledger__bar">
                    <span
                      className="ledger__bar-fill"
                      style={{ width: `${c.progress}%` }}
                    />
                  </span>
                  {c.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portals container">
        <h2 className="portals__title">Three portals, one campus</h2>
        <div className="portals__grid">
          <article className="portal-card">
            <span className="portal-card__tag">Student</span>
            <h3>Track your own progress</h3>
            <p>
              Attendance percentage, pending assignments, quiz scores, overall
              course progress and fee status — all on one dashboard.
            </p>
            <Link to="/login/student">Student login →</Link>
          </article>
          <article className="portal-card">
            <span className="portal-card__tag">Teacher</span>
            <h3>See the whole batch at a glance</h3>
            <p>
              Review every enrolled student's attendance and submissions, and
              monitor how each of your running courses is progressing.
            </p>
            <Link to="/login/teacher">Teacher login →</Link>
          </article>
          <article className="portal-card">
            <span className="portal-card__tag">Admin</span>
            <h3>Keep the records straight</h3>
            <p>
              Full record of every student and teacher — add, remove, or
              update batches, courses and fee status from one place.
            </p>
            <Link to="/login/admin">Admin login →</Link>
          </article>
        </div>
      </section>
    </main>
  );
}
