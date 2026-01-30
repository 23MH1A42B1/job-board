import useJobStore from "../store/useJobStore";

const PAGE_SIZE = 10;

export default function Pagination({ total }) {
  const page = useJobStore((s) => s.page);
  const setPage = useJobStore((s) => s.setPage);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  if (totalPages <= 1) return null;

  return (
    <div data-testid="pagination-controls" className="pagination">
      {/* Previous Button */}
      <button
        type="button"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        ← Back
      </button>

      <span className="page-info">
        Page {page} of {totalPages}
      </span>

      {/* Next Button (REQUIRED BY TESTS) */}
      <button
        type="button"
        data-testid="pagination-next"
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}
