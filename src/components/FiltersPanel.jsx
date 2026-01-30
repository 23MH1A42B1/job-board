import useJobStore from "../store/useJobStore";

export default function FiltersPanel() {
  const { setJobType, clearFilters } = useJobStore();

  return (
    <div>
      <button data-testid="filter-job-type-remote"
        onClick={() => setJobType("Remote")}
      >
        Remote
      </button>

      <button data-testid="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}
