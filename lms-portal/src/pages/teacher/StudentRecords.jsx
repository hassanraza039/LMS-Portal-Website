import { useState } from "react";
import { students } from "../../data/mockData";

export default function StudentRecords() {
  const [query, setQuery] = useState("");

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="portal-header">
        <div>
          <h1>Student Records</h1>
          <p>Attendance, assignments and quiz performance for your students</p>
        </div>
      </div>

      <div className="panel">
        <input
          placeholder="Search student by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "100%",
            maxWidth: 320,
            padding: "9px 12px",
            border: "1px solid var(--line)",
            borderRadius: 6,
            fontSize: 14,
            marginBottom: 18,
          }}
        />
        <table className="data-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Attendance</th>
              <th>Assignments</th>
              <th>Quiz Avg</th>
              <th>Fee</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>
                  <span className={`badge ${s.attendance >= 75 ? "badge--green" : "badge--red"}`}>
                    {s.attendance}%
                  </span>
                </td>
                <td>
                  {s.assignmentsDone}/{s.assignmentsTotal}
                </td>
                <td>{s.quizAvg}%</td>
                <td>
                  <span
                    className={`badge ${
                      s.feeStatus === "Paid"
                        ? "badge--green"
                        : s.feeStatus === "Pending"
                        ? "badge--gold"
                        : "badge--red"
                    }`}
                  >
                    {s.feeStatus}
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
