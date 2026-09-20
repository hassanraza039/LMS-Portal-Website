import { useState } from "react";
import { CheckCircle2, Clock, ChevronDown, LayoutGrid } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { courseStudents, courseModules } from "../../../data/mockData";

export default function CourseProgressTab() {
  const { course } = useOutletContext();
  const [studentId, setStudentId] = useState(courseStudents[0].id);
  const [openModule, setOpenModule] = useState(null);

  const student = courseStudents.find((s) => s.id === studentId) || courseStudents[0];

  const totalTopics = courseModules.reduce((sum, m) => sum + m.topicsTotal, 0);
  const doneTopics = courseModules.reduce((sum, m) => sum + m.topicsDone, 0);
  const overallPct = Math.round((doneTopics / totalTopics) * 100);

  return (
    <>
      <div className="tab-toolbar">
        <span style={{ fontSize: 12, color: "var(--text-faint)", fontWeight: 600, letterSpacing: "0.03em" }}>
          COMPARE PROGRESS
        </span>
        <select
          className="select-input"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          {courseStudents.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      <div className="panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 4 }}>
          <div style={{ minWidth: 0 }}>
            <span style={{ fontSize: 11.5, color: "var(--text-faint)", fontWeight: 600, letterSpacing: "0.03em" }}>
              STUDENT PROGRESS
            </span>
            <p style={{ margin: "4px 0 2px", fontWeight: 700, fontSize: 16 }}>
              {student.name} <span style={{ fontWeight: 500, color: "var(--text-soft)" }}>- {course.title}</span>
            </p>
            <p style={{ margin: 0, fontSize: 13, color: "var(--text-soft)" }}>
              Mon 01:00 PM - 03:00 PM | Wed 01:00 PM - 03:00 PM | Fri 01:00 PM - 03:00 PM
            </p>
          </div>
          <span className="badge badge--outline">
            Topics: {doneTopics}/{totalTopics}
          </span>
        </div>

        <div style={{ marginTop: 18, marginBottom: 22 }}>
          <div className="progress-line">
            <span>Overall progress</span>
            <span style={{ color: "var(--blue)", fontWeight: 600 }}>{overallPct}%</span>
          </div>
          <div className="progress-track" style={{ height: 8 }}>
            <div className="progress-fill" style={{ width: `${overallPct}%`, background: "var(--blue)" }} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {courseModules.map((m) => {
            const pct = m.topicsTotal ? Math.round((m.topicsDone / m.topicsTotal) * 100) : 0;
            const complete = pct === 100;
            const isOpen = openModule === m.id;
            return (
              <div key={m.id} style={{ border: "1px solid var(--border)", borderRadius: 10 }}>
                <button
                  onClick={() => setOpenModule(isOpen ? null : m.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                    {complete ? (
                      <CheckCircle2 size={18} color="var(--green)" />
                    ) : (
                      <Clock size={18} color="var(--amber)" />
                    )}
                    <span>
                      <div style={{ fontWeight: 600, fontSize: 14.5 }}>{m.name}</div>
                      <div style={{ fontSize: 12.5, color: "var(--text-faint)" }}>
                        Topics: {m.topicsDone}/{m.topicsTotal}
                      </div>
                    </span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: `2px solid ${pct > 0 ? "var(--blue)" : "var(--border-strong)"}`,
                        display: "grid",
                        placeItems: "center",
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: pct > 0 ? "var(--blue)" : "var(--text-faint)",
                      }}
                    >
                      {pct}%
                    </span>
                    <ChevronDown
                      size={16}
                      color="var(--text-faint)"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}
                    />
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 16px 14px 46px", fontSize: 13, color: "var(--text-soft)" }}>
                    {m.topicsDone} of {m.topicsTotal} topics completed in this module.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
