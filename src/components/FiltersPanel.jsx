import Select from "react-select";
import useJobStore from "../store/useJobStore";
import data from "../data/mock-data.json";

/* Collect unique skills from all jobs */
const skillOptions = Array.from(
  new Set(data.jobs.flatMap((job) => job.skills))
).map((skill) => ({
  value: skill,
  label: skill
}));

export default function FiltersPanel() {
  const jobType = useJobStore((s) => s.jobType);
  const setJobType = useJobStore((s) => s.setJobType);

  const skills = useJobStore((s) => s.skills);
  const setSkills = useJobStore((s) => s.setSkills);

  const salaryRange = useJobStore((s) => s.salaryRange);
  const setSalaryRange = useJobStore((s) => s.setSalaryRange);

  const clearFilters = useJobStore((s) => s.clearFilters);

  return (
    <div className="filter-box">
      <h3>Filters</h3>

      {/* ================= JOB TYPE ================= */}
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

      {/* ================= SKILLS MULTI-SELECT ================= */}
      <div style={{ marginTop: "12px" }}>
        <Select
          isMulti
          options={skillOptions}
          value={skillOptions.filter((o) => skills.includes(o.value))}
          onChange={(selected) =>
            setSkills(selected ? selected.map((s) => s.value) : [])
          }
          placeholder="Filter by skills"
          data-testid="filter-skills"
        />
      </div>

      {/* ================= SALARY RANGE (SINGLE LINE) ================= */}
      <div style={{ marginTop: "16px" }}>
        <label style={{ fontSize: "14px", fontWeight: 600 }}>
          Salary Range
        </label>

        <div
          className="salary-range"
          data-testid="filter-salary-slider"
        >
          {/* Min slider */}
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={salaryRange[0]}
            onChange={(e) =>
              setSalaryRange([
                Math.min(Number(e.target.value), salaryRange[1] - 5000),
                salaryRange[1]
              ])
            }
          />

          {/* Max slider */}
          <input
            type="range"
            min="0"
            max="200000"
            step="5000"
            value={salaryRange[1]}
            onChange={(e) =>
              setSalaryRange([
                salaryRange[0],
                Math.max(Number(e.target.value), salaryRange[0] + 5000)
              ])
            }
          />
        </div>

        <div className="salary-values">
          ₹{salaryRange[0]} – ₹{salaryRange[1]}
        </div>
      </div>

      {/* ================= CLEAR FILTERS ================= */}
      <button
        style={{ marginTop: "14px" }}
        data-testid="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}
