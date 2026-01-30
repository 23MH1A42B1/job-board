import useJobStore from "../store/useJobStore";

export default function Toolbar() {
  const setSearch = useJobStore((s) => s.setSearch);
  const setSort = useJobStore((s) => s.setSort);
  const setViewMode = useJobStore((s) => s.setViewMode);

  return (
    <header className="top-bar">
      {/* Left: Logo */}
      <div className="top-left">
        <span className="logo">Job Board</span>
      </div>

      {/* Center: Search */}
      <div className="top-center">
        <input
          type="text"
          data-testid="search-input"
          placeholder="Search jobs..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Right: Controls */}
      <div className="top-right">
        <button
          data-testid="sort-salary-desc"
          onClick={() => setSort("salary-desc")}
        >
          Salary
        </button>

        <button
          data-testid="grid-view-btn"
          onClick={() => setViewMode("grid")}
        >
          Grid
        </button>

        <button
          data-testid="list-view-btn"
          onClick={() => setViewMode("list")}
        >
          List
        </button>
      </div>
    </header>
  );
}
