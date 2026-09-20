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

      <form className="panel inline-form" onSubmit={addStudent}>
        <label>
          <span>Student name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Fatima Noor"
            className="form-input"
          />
        </label>
        <label>
          <span>Course</span>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="form-input"
          >
            {courses.map((c) => (
              <option key={c.id} value={c.title}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="btn-solid">
          + Add Student
        </button>
      </form>

      <div className="panel">
        <div className="table-scroll">
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
                  <td data-label="Name">{s.name}</td>
                  <td data-label="Course">{s.course}</td>
                  <td data-label="Attendance">{s.attendance}%</td>
                  <td data-label="Fee">
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
                  <td data-label="">
                    <button onClick={() => removeStudent(s.id)} className="btn-danger-outline">
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
