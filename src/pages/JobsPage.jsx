import data from "../data/mock-data.json";
import useJobStore from "../store/useJobStore";

import Toolbar from "../components/Toolbar";
import FiltersPanel from "../components/FiltersPanel";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 10;

// Create companyId → companyName map
const companiesMap = Object.fromEntries(
  data.companies.map((c) => [c.id, c.name])
);

export default function JobsPage() {
  const jobType = useJobStore((s) => s.jobType);
  const search = useJobStore((s) => s.search);
  const sort = useJobStore((s) => s.sort);
  const page = useJobStore((s) => s.page);
  const skills = useJobStore((s) => s.skills);
  const salaryRange = useJobStore((s) => s.salaryRange);

  // 1️⃣ Start with all jobs
  let jobs = data.jobs;

  // 2️⃣ Job Type Filter
  if (jobType) {
    jobs = jobs.filter((job) => job.jobType === jobType);
  }
  // Skills filter (ALL selected skills must match)
if (skills.length > 0) {
  jobs = jobs.filter((job) =>
    skills.every((skill) => job.skills.includes(skill))
  );
}

// Salary Range Filter
jobs = jobs.filter(
  (job) =>
    job.salary >= salaryRange[0] &&
    job.salary <= salaryRange[1]
);


  // 3️⃣ Search (Title + Company Name)
  if (search) {
    const q = search.toLowerCase();
    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        companiesMap[job.companyId].toLowerCase().includes(q)
    );
  }

  // 4️⃣ Sort by Salary (High → Low)
  if (sort === "salary-desc") {
    jobs = [...jobs].sort((a, b) => b.salary - a.salary);
  }

  // 5️⃣ Pagination (LAST)
  const start = (page - 1) * PAGE_SIZE;
  const paginatedJobs = jobs.slice(start, start + PAGE_SIZE);

  return (
    <>
      {/* TOP BAR */}
      <Toolbar />

      {/* MAIN CONTENT */}
      <div className="container main-layout">
        {/* LEFT FILTER */}
        <FiltersPanel />

        {/* RIGHT JOB LIST */}
        <div className="jobs-area">
          <JobList jobs={paginatedJobs} />
          <Pagination total={jobs.length} />
        </div>
      </div>
    </>
  );
}
