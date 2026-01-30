import { useMemo } from "react";
import useJobs from "../hooks/useJobs";
import useJobStore from "../store/useJobStore";
import useDebounce from "../hooks/useDebounce";
import Layout from "../layout/Layout";
import JobsToolbar from "../components/JobsToolbar";
import JobList from "../components/JobList";

const PAGE_SIZE = 10;

export default function JobsPage() {
  const { data } = useJobs();

  const jobType = useJobStore(s => s.jobType);
  const skills = useJobStore(s => s.skills);
  const search = useJobStore(s => s.search);
  const sort = useJobStore(s => s.sort);
  const page = useJobStore(s => s.page);

  const debouncedSearch = useDebounce(search, 300);

  const filteredJobs = useMemo(() => {
    if (!data || !data.jobs) return [];

    let result = data.jobs;

    if (jobType) {
      result = result.filter(j => j.jobType === jobType);
    }

    if (skills.length > 0) {
      result = result.filter(j =>
        skills.every(skill => j.skills.includes(skill))
      );
    }

    if (debouncedSearch) {
      const s = debouncedSearch.toLowerCase();
      result = result.filter(j =>
        j.title.toLowerCase().includes(s)
      );
    }

    if (sort === "salary-desc") {
      result = [...result].sort((a, b) => b.salary - a.salary);
    }

    return result;
  }, [data, jobType, skills, debouncedSearch, sort]);

  const paginatedJobs = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredJobs.slice(start, start + PAGE_SIZE);
  }, [filteredJobs, page]);

  if (!data) return <p className="p-6">Loading jobs...</p>;

  return (
    <Layout>
      <JobsToolbar />
      <div className="mt-6">
        <JobList jobs={paginatedJobs} />
      </div>
    </Layout>
  );
}
