import data from "../data/mock-data.json";
import useJobStore from "../store/useJobStore";

import Toolbar from "../components/Toolbar";
import FiltersPanel from "../components/FiltersPanel";
import JobList from "../components/JobList";
import Pagination from "../components/Pagination";

const PAGE_SIZE = 10;

export default function JobsPage() {
  const jobType = useJobStore((s) => s.jobType);
  const search = useJobStore((s) => s.search);
  const sort = useJobStore((s) => s.sort);
  const page = useJobStore((s) => s.page);

  let jobs = data.jobs;

  if (jobType) {
    jobs = jobs.filter((j) => j.jobType === jobType);
  }

  if (search) {
    const q = search.toLowerCase();
    jobs = jobs.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q)
    );
  }

  if (sort === "salary-desc") {
    jobs = [...jobs].sort((a, b) => b.salary - a.salary);
  }

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
