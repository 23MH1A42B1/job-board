import useJobStore from "../store/useJobStore";

export default function FiltersPanel() {
  const jobType = useJobStore((s) => s.jobType);
  const setJobType = useJobStore((s) => s.setJobType);
  const clearFilters = useJobStore((s) => s.clearFilters);

  return (
    <div className="filter-box">
      <h3>Job Type</h3>

      <label>
        <input
          type="radio"
          name="jobType"
          data-testid="filter-job-type-remote"
          checked={jobType === "Remote"}
          onChange={() => setJobType("Remote")}
        />
        Remote
      </label>

      <label>
        <input
          type="radio"
          name="jobType"
          data-testid="filter-job-type-hybrid"
          checked={jobType === "Hybrid"}
          onChange={() => setJobType("Hybrid")}
        />
        Hybrid
      </label>

      <button
        type="button"
        data-testid="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}
