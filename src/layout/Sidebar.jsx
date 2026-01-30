import useJobStore from "../store/useJobStore";
import Select from "react-select";

const skillOptions = [
  { value: "React", label: "React" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "GraphQL", label: "GraphQL" }
];

export default function Sidebar() {
  const { setJobType, setSkills, clearFilters } = useJobStore();

  return (
    <aside className="w-72 hidden lg:block py-6 pr-6">
      <h2 className="font-semibold mb-4">
        Filters <span className="text-sm text-gray-500">(Active)</span>
      </h2>

      {/* Job Type */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Job Type</h3>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            name="jobType"
            data-testid="filter-job-type-remote"
            onChange={() => setJobType("Remote")}
          />
          Remote
        </label>

        <label className="flex items-center gap-2 text-sm mt-2">
          <input
            type="radio"
            name="jobType"
            data-testid="filter-job-type-hybrid"
            onChange={() => setJobType("Hybrid")}
          />
          Hybrid
        </label>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2">Skills</h3>

        <div data-testid="filter-skills">
          <Select
            isMulti
            options={skillOptions}
            onChange={(selected) =>
              setSkills(selected.map((s) => s.value))
            }
          />
        </div>
      </div>

      <button
        data-testid="clear-filters-btn"
        onClick={clearFilters}
        className="text-sm text-red-500"
      >
        Clear all filters
      </button>
    </aside>
  );
}
