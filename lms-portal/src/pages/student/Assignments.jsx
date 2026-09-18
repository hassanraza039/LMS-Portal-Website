import { assignments } from "../../data/mockData";

export default function Assignments() {
  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Assignments</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Assignments</h1>
          <p>Track submissions and grades across your course</p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Course</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Grade</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td>{a.course}</td>
                <td>{a.due}</td>
                <td>
                  <span
                    className={`badge ${
                      a.status === "Graded"
                        ? "badge--green"
                        : a.status === "Pending"
                        ? "badge--gold"
                        : "badge--green"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td>{a.grade || "—"}</td>
                <td>
                  {a.status === "Pending" ? (
                    <button
                      style={{
                        background: "var(--blue)",
                        color: "#fff",
                        border: "none",
                        padding: "7px 14px",
                        borderRadius: 6,
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      Submit
                    </button>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
