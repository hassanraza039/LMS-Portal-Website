import { Clock, CalendarCheck, ShieldCheck } from "lucide-react";
import { attendanceLog } from "../../data/mockData";

export default function Attendance() {
  const present = attendanceLog.filter((d) => d.status === "Present").length;
  const percent = Math.round((present / attendanceLog.length) * 100);

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Attendance</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Attendance</h1>
          <p>Web Development · Batch 12</p>
        </div>
      </div>

      <div className="stat-row stat-row--3">
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Overall attendance</span>
            <span className="stat-card__value">{percent}%</span>
          </div>
          <span className="stat-card__icon stat-card__icon--green"><Clock size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Days present</span>
            <span className="stat-card__value">{present}<small> / {attendanceLog.length}</small></span>
          </div>
          <span className="stat-card__icon stat-card__icon--blue"><CalendarCheck size={20} /></span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Minimum required</span>
            <span className="stat-card__value">75%</span>
          </div>
          <span className="stat-card__icon stat-card__icon--amber"><ShieldCheck size={20} /></span>
        </div>
      </div>

      <div className="panel">
        <h3 className="panel__title">Daily log</h3>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceLog.map((d) => (
                <tr key={d.date}>
                  <td data-label="Date">{d.date}</td>
                  <td data-label="Status">
                    <span
                      className={`badge ${
                        d.status === "Present"
                          ? "badge--green"
                          : d.status === "Leave"
                          ? "badge--gold"
                          : "badge--red"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
