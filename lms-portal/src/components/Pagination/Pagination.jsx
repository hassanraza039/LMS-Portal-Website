import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Pagination.css";

export default function Pagination({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  const pages = [];
  for (let p = 1; p <= totalPages; p++) {
    if (p === 1 || p === totalPages || Math.abs(p - page) <= 1) pages.push(p);
    else if (pages[pages.length - 1] !== "...") pages.push("...");
  }

  return (
    <div className="pagination">
      <span className="pagination__summary">
        Showing {start}-{end} of {total} records
      </span>
      <div className="pagination__controls">
        <button
          className="pagination__nav"
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          aria-label="Previous page"
        >
          <ChevronLeft size={14} /> <span className="pagination__nav-label">Previous</span>
        </button>
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`dots-${i}`} className="pagination__dots">
              …
            </span>
          ) : (
            <button
              key={p}
              className={`pagination__page ${p === page ? "is-active" : ""}`}
              onClick={() => onPageChange(p)}
            >
              {p}
            </button>
          )
        )}
        <button
          className="pagination__nav"
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          aria-label="Next page"
        >
          <span className="pagination__nav-label">Next</span> <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
