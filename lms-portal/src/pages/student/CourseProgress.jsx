const modules = [
  { name: "HTML & CSS Foundations", status: "Completed" },
  { name: "JavaScript Essentials", status: "Completed" },
  { name: "React Basics", status: "In Progress" },
  { name: "State Management", status: "In Progress" },
  { name: "Backend with Node.js", status: "Not Started" },
  { name: "Final Project", status: "Not Started" },
];

export default function CourseProgress() {
  const completed = modules.filter((m) => m.status === "Completed").length;
  const pct = Math.round((completed / modules.length) * 100);

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Course Progress</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Course Progress</h1>
          <p>Web Development · {completed} of {modules.length} modules completed</p>
        </div>
      </div>

      <div className="panel">
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
          <div className="progress-track" style={{ height: 10 }}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--blue)" }}>
            {pct}%
          </span>
        </div>

        <ul style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {modules.map((m) => (
            <li
              key={m.name}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 8,
                padding: "12px 14px",
                background: "var(--surface-soft)",
                borderRadius: 8,
              }}
            >
              <span style={{ fontSize: 14.5 }}>{m.name}</span>
              <span
                className={`badge ${
                  m.status === "Completed"
                    ? "badge--green"
                    : m.status === "In Progress"
                    ? "badge--gold"
                    : "badge--red"
                }`}
              >
                {m.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
