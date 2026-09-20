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

      <form className="panel inline-form" onSubmit={addTeacher}>
        <label>
          <span>Teacher name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Zara Yousuf"
            className="form-input"
          />
        </label>
        <button type="submit" className="btn-solid">
          + Add Teacher
        </button>
      </form>

      <div className="panel">
        <div className="table-scroll">
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
                  <td data-label="Name">{t.name}</td>
                  <td data-label="Courses">{t.courses.length ? t.courses.join(", ") : "—"}</td>
                  <td data-label="Students">{t.students}</td>
                  <td data-label="Rating">{t.rating || "—"}</td>
                  <td data-label="">
                    <button onClick={() => removeTeacher(t.id)} className="btn-danger-outline">
                      Remove
                    </button>
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
