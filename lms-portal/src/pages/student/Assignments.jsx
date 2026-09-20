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
        <div className="table-scroll">
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
                  <td data-label="Title">{a.title}</td>
                  <td data-label="Course">{a.course}</td>
                  <td data-label="Due Date">{a.due}</td>
                  <td data-label="Status">
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
                  <td data-label="Grade">{a.grade || "—"}</td>
                  <td data-label="">
                    {a.status === "Pending" ? (
                      <button className="btn-solid" style={{ padding: "7px 14px", fontSize: 13 }}>
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
      </div>
    </>
  );
}
