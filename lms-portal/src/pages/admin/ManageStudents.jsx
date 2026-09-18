import { useState } from "react";
import { students as initialStudents, courses } from "../../data/mockData";

export default function ManageStudents() {
  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [course, setCourse] = useState(courses[0].title);

  function addStudent(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setStudents((prev) => [
      ...prev,
      {
        id: `s${Date.now()}`,
        name: name.trim(),
        course,
        attendance: 0,
        assignmentsDone: 0,
        assignmentsTotal: 10,
        quizAvg: 0,
        feeStatus: "Pending",
      },
    ]);
    setName("");
  }

  function removeStudent(id) {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Manage Students</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Manage Students</h1>
          <p>Full record of enrolled students</p>
        </div>
      </div>

      <form className="panel" onSubmit={addStudent} style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          <span style={{ display: "block", marginBottom: 6 }}>Student name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Fatima Noor"
            style={{ padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 14 }}
          />
        </label>
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          <span style={{ display: "block", marginBottom: 6 }}>Course</span>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            style={{ padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 14 }}
          >
            {courses.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          style={{
            background: "var(--blue)",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          + Add Student
        </button>
      </form>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Course</th>
              <th>Attendance</th>
              <th>Fee</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.course}</td>
                <td>{s.attendance}%</td>
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
                <td>
                  <button
                    onClick={() => removeStudent(s.id)}
                    style={{
                      background: "none",
                      border: "1px solid var(--red)",
                      color: "var(--red)",
                      padding: "5px 12px",
                      borderRadius: 6,
                      fontSize: 12.5,
                      fontWeight: 600,
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
