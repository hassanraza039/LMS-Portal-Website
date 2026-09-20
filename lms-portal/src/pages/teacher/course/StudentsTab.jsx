import { useMemo, useState } from "react";
import { Search, Eye } from "lucide-react";
import { courseStudents } from "../../../data/mockData";
import Pagination from "../../../components/Pagination/Pagination";

const PAGE_SIZE = 10;

export default function StudentsTab() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return courseStudents.filter((s) => {
      const matchesQuery =
        s.name.toLowerCase().includes(query.toLowerCase()) ||
        s.roll.includes(query) ||
        s.email.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "All" || s.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function initials(name) {
    return name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();
  }

  return (
    <>
      <div className="tab-toolbar">
        <div className="search-input">
          <Search size={15} color="var(--text-faint)" />
          <input
            placeholder="Search by name, email or roll no..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
        </div>
        <select
          className="select-input"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
        >
          <option>All</option>
          <option>Enrolled</option>
        </select>
      </div>

      <div className="panel">
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paged.map((s) => (
                <tr key={s.id}>
                  <td data-label="Name">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background: "var(--blue-soft)",
                          color: "var(--blue)",
                          display: "grid",
                          placeItems: "center",
                          fontSize: 11.5,
                          fontWeight: 600,
                          flexShrink: 0,
                        }}
                      >
                        {initials(s.name)}
                      </span>
                      {s.name}
                    </div>
                  </td>
                  <td data-label="Roll Number">{s.roll}</td>
                  <td data-label="Email">{s.email}</td>
                  <td data-label="Status">
                    <span className="badge badge--outline">{s.status.toUpperCase()}</span>
                  </td>
                  <td data-label="Action">
                    <button className="icon-btn">
                      <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination page={page} pageSize={PAGE_SIZE} total={filtered.length} onPageChange={setPage} />
      </div>
    </>
  );
}
