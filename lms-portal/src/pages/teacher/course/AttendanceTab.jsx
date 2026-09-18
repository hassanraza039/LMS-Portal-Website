import { useMemo, useState } from "react";
import { Clock, CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import { courseStudents } from "../../../data/mockData";
import Pagination from "../../../components/Pagination/Pagination";

const PAGE_SIZE = 10;
const CYCLE = ["Not Marked", "Present", "Absent", "Leave"];

export default function AttendanceTab() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [statuses, setStatuses] = useState(() =>
    Object.fromEntries(courseStudents.map((s) => [s.id, "Not Marked"]))
  );
  const [page, setPage] = useState(1);

  const counts = useMemo(() => {
    const c = { Present: 0, Absent: 0, Leave: 0 };
    Object.values(statuses).forEach((s) => {
      if (c[s] !== undefined) c[s] += 1;
    });
    return c;
  }, [statuses]);

  function cycleStatus(id) {
    setStatuses((prev) => {
      const current = prev[id];
      const next = CYCLE[(CYCLE.indexOf(current) + 1) % CYCLE.length];
      return { ...prev, [id]: next };
    });
  }

  const paged = courseStudents.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function badgeClass(status) {
    if (status === "Present") return "badge--green";
    if (status === "Absent") return "badge--red";
    if (status === "Leave") return "badge--gold";
    return "badge--outline";
  }

  return (
    <>
      <div className="tab-toolbar">
        <span />
        <label style={{ fontSize: 13, fontWeight: 600, color: "var(--text)" }}>
          <span style={{ display: "block", marginBottom: 6 }}>Select a Date</span>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="select-input"
          />
        </label>
      </div>

      <div className="stat-row" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Total Students</span>
            <span className="stat-card__value">{courseStudents.length}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--blue">
            <Clock size={20} />
          </span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Present</span>
            <span className="stat-card__value">{counts.Present}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--green">
            <CheckCircle2 size={20} />
          </span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Absent</span>
            <span className="stat-card__value">{counts.Absent}</span>
          </div>
          <span className="stat-card__icon" style={{ background: "var(--red-soft)", color: "var(--red)" }}>
            <XCircle size={20} />
          </span>
        </div>
        <div className="stat-card">
          <div className="stat-card__text">
            <span className="stat-card__label">Leave</span>
            <span className="stat-card__value">{counts.Leave}</span>
          </div>
          <span className="stat-card__icon stat-card__icon--amber">
            <MinusCircle size={20} />
          </span>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Roll #</th>
              <th>Full Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((s) => (
              <tr key={s.id}>
                <td>{s.roll}</td>
                <td>{s.name}</td>
                <td>
                  <button
                    className={`badge ${badgeClass(statuses[s.id])}`}
                    style={{ border: "none", cursor: "pointer" }}
                    onClick={() => cycleStatus(s.id)}
                    title="Click to change status"
                  >
                    {statuses[s.id].toUpperCase()}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination page={page} pageSize={PAGE_SIZE} total={courseStudents.length} onPageChange={setPage} />
      </div>
    </>
  );
}
