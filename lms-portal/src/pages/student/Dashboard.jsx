import { Clock, GraduationCap, Hash, Award, MapPin, Copy } from "lucide-react";
import { payments } from "../../data/mockData";

const course = {
  title: "Modern Web Application Development",
  schedule: ["Mon 01:00 PM - 03:00 PM", "Wed 01:00 PM - 03:00 PM", "Fri 01:00 PM - 03:00 PM"],
  progress: 73,
  batch: 20,
  roll: "773198",
  campus: "Zaitoon Ashraf IT Park",
  city: "Karachi",
};

export default function StudentDashboard() {
  const latestFee = payments[payments.length - 1];

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>{course.title}</strong>
      </div>

      <div className="stat-row" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Attendance</span>
            <span className="stat-card__value">
              98<small>/111</small>
            </span>
          </div>
          <span className="stat-card__icon stat-card__icon--green">
            <Clock size={20} />
          </span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Assignment</span>
            <span className="stat-card__value">
              6<small>/13</small>
            </span>
          </div>
          <span className="stat-card__icon stat-card__icon--purple">
            <GraduationCap size={20} />
          </span>
        </div>
      </div>

      <p className="section-title">Active Course</p>

      <div className="course-card">
        <div className="course-card__head">
          <h2>{course.title}</h2>
          <span className="badge badge--outline">Enrolled</span>
        </div>

        <div className="schedule-row">
          {course.schedule.map((s) => (
            <span className="schedule-pill" key={s}>
              {s}
            </span>
          ))}
        </div>

        <div className="progress-line">
          <span>Progress</span>
          <span>{course.progress}% Completed</span>
        </div>
        <div className="progress-track" style={{ height: 8 }}>
          <div className="progress-fill" style={{ width: `${course.progress}%` }} />
        </div>

        <div className="info-grid">
          <span className="info-row">
            <Hash size={15} /> Batch: <strong>{course.batch}</strong>
          </span>
          <span className="info-row">
            <Award size={15} /> Roll: <strong>{course.roll}</strong>
          </span>
          <span className="info-row">
            <MapPin size={15} /> Campus: <span className="info-link">{course.campus}</span>
          </span>
          <span className="info-row">
            <MapPin size={15} /> City: <strong>{course.city}</strong>
          </span>
        </div>
      </div>

      <p className="section-title">Fee</p>
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Due date</th>
              <th>Voucher ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.month}</td>
                <td>Rs: {p.amount.toLocaleString()} /-</td>
                <td>Monthly</td>
                <td>{p.date !== "-" ? p.date : "—"}</td>
                <td style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  20260{p.id.replace(/\D/g, "")}773198
                  <button
                    style={{
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      borderRadius: 6,
                      padding: 4,
                      display: "grid",
                      placeItems: "center",
                      color: "var(--text-soft)",
                    }}
                    aria-label="Copy voucher ID"
                  >
                    <Copy size={13} />
                  </button>
                </td>
                <td>
                  <span className={`badge ${p.status === "Paid" ? "badge--green" : "badge--gold"}`}>
                    {p.status === "Paid" ? "PAID" : "PENDING"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
