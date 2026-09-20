import { useState } from "react";
import { Plus, Eye, Pencil } from "lucide-react";
import { courseAssignments } from "../../../data/mockData";
import Pagination from "../../../components/Pagination/Pagination";

const PAGE_SIZE = 10;

export default function AssignmentsTab() {
  const [page, setPage] = useState(1);
  const paged = courseAssignments.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <div className="tab-toolbar">
        <span />
        <button className="btn-primary">
          <Plus size={15} /> New Assignment
        </button>
      </div>

      <div className="panel">
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Topics</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((a) => (
                <tr key={a.id}>
                  <td data-label="Title" style={{ minWidth: 100 }}>
                    {a.title}
                    {a.tag && <div className="hackathon-tag">{a.tag}</div>}
                  </td>
                  <td data-label="Description" style={{ maxWidth: 190, color: "var(--text-soft)" }}>{a.description}</td>
                  <td data-label="Topics" style={{ minWidth: 110 }}>
                    {a.topics.length === 0 ? (
                      <span style={{ color: "var(--text-faint)" }}>No topics</span>
                    ) : (
                      a.topics.map((t, i) => (
                        <span key={i} className={`tag-pill ${t.startsWith("+") ? "tag-pill--muted" : ""}`}>
                          {t}
                        </span>
                      ))
                    )}
                  </td>
                  <td data-label="Due Date" style={{ whiteSpace: "nowrap" }}>{a.dueDate}</td>
                  <td data-label="Actions">
                    <div style={{ display: "flex", gap: 4 }}>
                      <button className="icon-btn">
                        <Eye size={16} />
                      </button>
                      <button className="icon-btn">
                        <Pencil size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination page={page} pageSize={PAGE_SIZE} total={courseAssignments.length} onPageChange={setPage} />
      </div>
    </>
  );
}
