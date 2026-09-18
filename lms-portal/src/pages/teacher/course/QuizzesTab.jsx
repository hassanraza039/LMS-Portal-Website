import { useState } from "react";
import { Plus, Eye, Copy, EyeOff } from "lucide-react";
import { courseQuizzes } from "../../../data/mockData";
import Pagination from "../../../components/Pagination/Pagination";

const PAGE_SIZE = 10;

export default function QuizzesTab() {
  const [page, setPage] = useState(1);
  const paged = courseQuizzes.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="tab-toolbar">
        <span />
        <button className="btn-primary">
          <Plus size={15} /> New Quiz
        </button>
      </div>

      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Course(s)</th>
              <th>Date</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((q) => (
              <tr key={q.id}>
                <td style={{ minWidth: 130 }}>{q.title}</td>
                <td style={{ maxWidth: 260, color: "var(--text-soft)" }}>{q.courses.join(", ")}</td>
                <td style={{ whiteSpace: "nowrap" }}>{q.date}</td>
                <td style={{ whiteSpace: "nowrap" }}>{q.expiry}</td>
                <td>
                  <span className="badge badge--green">{q.status.toUpperCase()}</span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 4 }}>
                    <button className="icon-btn" style={{ color: "var(--green)" }}>
                      <Eye size={16} />
                    </button>
                    <button className="icon-btn">
                      <Copy size={15} />
                    </button>
                    <button className="icon-btn">
                      <EyeOff size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination page={page} pageSize={PAGE_SIZE} total={courseQuizzes.length} onPageChange={setPage} />
      </div>
    </>
  );
}
