import { courses } from "../../data/mockData";

export default function TeacherCourseProgress() {
  return (
    <>
      <div className="portal-header">
        <div>
          <h1>Course Progress</h1>
          <p>How far along each of your running courses is</p>
        </div>
      </div>

      <div className="panel">
        <ul style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {courses
            .filter((c) => c.teacher === "Ahmed Raza")
            .map((c) => (
              <li key={c.id}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                    fontSize: 14.5,
                  }}
                >
                  <strong>{c.title}</strong>
                  <span style={{ color: "var(--ink-soft)" }}>{c.students} students</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div className="progress-track" style={{ height: 10 }}>
                    <div className="progress-fill" style={{ width: `${c.progress}%` }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
                    {c.progress}%
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
