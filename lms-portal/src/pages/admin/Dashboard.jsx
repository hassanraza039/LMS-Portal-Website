import { Users, GraduationCap, BookOpen, AlertTriangle } from "lucide-react";
import { courses, students, teachers } from "../../data/mockData";

export default function AdminDashboard() {
  const overdue = students.filter((s) => s.feeStatus !== "Paid").length;

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Dashboard</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Admin overview</h1>
          <p>Institute-wide snapshot across all batches</p>
        </div>
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Total students</span>
            <span className="stat-card__value">{students.length}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--blue"><GraduationCap size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Total teachers</span>
            <span className="stat-card__value">{teachers.length}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--purple"><Users size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Running courses</span>
            <span className="stat-card__value">{courses.length}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--green"><BookOpen size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Fee pending</span>
            <span className="stat-card__value">{overdue}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--amber"><AlertTriangle size={20} /></span>
        </div>
      </div>

      <div className="panel">
        <h3 className="panel__title">All courses</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Teacher</th>
              <th>Students</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((c) => (
              <tr key={c.id}>
                <td>{c.title}</td>
                <td>{c.teacher}</td>
                <td>{c.students}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${c.progress}%` }} />
                    </div>
                    <span style={{ fontSize: 13, color: "var(--text-soft)" }}>{c.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
