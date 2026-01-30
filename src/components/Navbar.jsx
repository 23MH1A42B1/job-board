export default function Navbar({ search, setSearch, onOpen }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <span className="logo">Job Board</span>
      </div>

      <div className="nav-center">
        <input
          className="nav-search"
          placeholder="Search jobs (Frontend, Developer, Remote...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <button className="upload-btn" onClick={onOpen}>
          + Upload Job
        </button>
      </div>
    </header>
  );
}
