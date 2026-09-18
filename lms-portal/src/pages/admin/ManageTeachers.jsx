import { useState } from "react";
import { teachers as initialTeachers } from "../../data/mockData";

export default function ManageTeachers() {
  const [teachers, setTeachers] = useState(initialTeachers);
  const [name, setName] = useState("");

  function addTeacher(e) {
    e.preventDefault();
    if (!name.trim()) return;
    setTeachers((prev) => [
      ...prev,
      { id: `t${Date.now()}`, name: name.trim(), courses: [], students: 0, rating: 0 },
    ]);
    setName("");
  }

  function removeTeacher(id) {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Manage Teachers</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Manage Teachers</h1>
          <p>Faculty record and course assignments</p>
        </div>
      </div>

      <form className="panel" onSubmit={addTeacher} style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
        <label style={{ fontSize: 13, fontWeight: 600 }}>
          <span style={{ display: "block", marginBottom: 6 }}>Teacher name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Zara Yousuf"
            style={{ padding: "9px 12px", border: "1px solid var(--border)", borderRadius: 6, fontSize: 14 }}
          />
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
          + Add Teacher
        </button>
      </form>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Courses</th>
              <th>Students</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.courses.length ? t.courses.join(", ") : "—"}</td>
                <td>{t.students}</td>
                <td>{t.rating || "—"}</td>
                <td>
                  <button
                    onClick={() => removeTeacher(t.id)}
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
