import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Job Board</h1>

        <nav className="space-x-4">
          <Link to="/" className="text-sm font-medium">Jobs</Link>
          <Link to="/tracker" className="text-sm font-medium">Tracker</Link>
        </nav>
      </div>
    </header>
  );
}
