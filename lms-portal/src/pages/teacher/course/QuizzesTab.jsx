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
        <div className="table-scroll">
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
                  <td data-label="Quiz" style={{ minWidth: 130 }}>{q.title}</td>
                  <td data-label="Course(s)" style={{ maxWidth: 260, color: "var(--text-soft)" }}>{q.courses.join(", ")}</td>
                  <td data-label="Date" style={{ whiteSpace: "nowrap" }}>{q.date}</td>
                  <td data-label="Expiry" style={{ whiteSpace: "nowrap" }}>{q.expiry}</td>
                  <td data-label="Status">
                    <span className="badge badge--green">{q.status.toUpperCase()}</span>
                  </td>
                  <td data-label="Action">
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
        </div>

        <Pagination page={page} pageSize={PAGE_SIZE} total={courseQuizzes.length} onPageChange={setPage} />
      </div>
    </>
  );
}
