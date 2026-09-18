import { useNavigate } from "react-router-dom";
import { BookOpen, Users, TrendingUp, ChevronRight } from "lucide-react";
import { courses } from "../../data/mockData";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const myCourses = courses.filter((c) => c.teacher === "Ahmed Raza");
  const totalStudents = myCourses.reduce((sum, c) => sum + c.students, 0);

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Dashboard</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Assalam-o-Alaikum, Ahmed</h1>
          <p>Select a course to view students, attendance, assignments and progress</p>
        </div>
      </div>

      <div className="stat-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Running courses</span>
            <span className="stat-card__value">{myCourses.length}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--blue"><BookOpen size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Total students</span>
            <span className="stat-card__value">{totalStudents}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--purple"><Users size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Avg progress</span>
            <span className="stat-card__value">
              {Math.round(myCourses.reduce((s, c) => s + c.progress, 0) / myCourses.length)}%
            </span>
          </div>
          <span className="stat-card__icon stat-card__icon--green"><TrendingUp size={20} /></span>
        </div>
      </div>

      <p className="section-title">My courses</p>
      <div className="panel" style={{ padding: 0 }}>
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ padding: "14px 20px" }}>Course</th>
              <th>Students</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myCourses.map((c) => (
              <tr
                key={c.id}
                onClick={() => navigate(`/teacher/course/${c.id}`)}
                style={{ cursor: "pointer" }}
              >
                <td style={{ padding: "16px 20px", fontWeight: 600 }}>{c.title}</td>
                <td>{c.students}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${c.progress}%` }} />
                    </div>
                    <span style={{ fontSize: 13, color: "var(--text-soft)" }}>{c.progress}%</span>
                  </div>
                </td>
                <td style={{ textAlign: "right", paddingRight: 20 }}>
                  <ChevronRight size={16} color="var(--text-faint)" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
