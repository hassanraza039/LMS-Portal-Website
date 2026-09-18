import { quizzes } from "../../data/mockData";

export default function Quiz() {
  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Quiz</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Quizzes</h1>
          <p>Your quiz history and scores</p>
        </div>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Date</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {quizzes.map((q) => {
              const pct = Math.round((q.score / q.total) * 100);
              return (
                <tr key={q.id}>
                  <td>{q.title}</td>
                  <td>{q.date}</td>
                  <td>
                    {q.score} / {q.total}
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div className="progress-track">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${pct}%`,
                            background: pct >= 75 ? "var(--green)" : "var(--red)",
                          }}
                        />
                      </div>
                      <span style={{ fontSize: 13, color: "var(--text-soft)" }}>{pct}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
