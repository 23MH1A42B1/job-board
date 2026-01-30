import useJobStore from "../store/useJobStore";

export default function Pagination() {
  const { page, setPage } = useJobStore();

  return (
    <div data-testid="pagination-controls">
      <button
        data-testid="pagination-next"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
