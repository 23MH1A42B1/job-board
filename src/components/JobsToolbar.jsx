import useJobStore from "../store/useJobStore";

export default function JobsToolbar() {
  const { setSearch, setSort, setViewMode } = useJobStore();

  return (
    <div className="bg-white p-4 rounded-md border flex flex-wrap gap-4 items-center justify-between">
      <input
        data-testid="search-input"
        placeholder="Search by role or company"
        className="border rounded px-3 py-2 w-full md:w-72"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex items-center gap-3">
        <select
          data-testid="sort-salary-desc"
          className="border rounded px-2 py-2"
          onChange={() => setSort("salary-desc")}
        >
          <option>Sort</option>
          <option value="salary-desc">Salary: High → Low</option>
        </select>

        <button
          data-testid="grid-view-btn"
          onClick={() => setViewMode("grid")}
        >
          🔲
        </button>

        <button
          data-testid="list-view-btn"
          onClick={() => setViewMode("list")}
        >
          📄
        </button>
      </div>
    </div>
  );
}
