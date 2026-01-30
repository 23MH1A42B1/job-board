import useJobStore from "../store/useJobStore";
import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  const viewMode = useJobStore((s) => s.viewMode);

  return (
    <div
      data-testid="job-list-container"
      data-view-mode={viewMode}
      className={viewMode === "grid" ? "grid" : "list"}
    >
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
