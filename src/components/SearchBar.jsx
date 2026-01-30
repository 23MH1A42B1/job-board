import useJobStore from "../store/useJobStore";

export default function SearchBar() {
  const { setSearch } = useJobStore();

  return (
    <input
      data-testid="search-input"
      placeholder="Search jobs..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
