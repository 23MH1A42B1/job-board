import { useMemo } from "react";
import data from "../data/mock-data.json";
import useJobStore from "../store/useJobStore";

export default function JobsPage() {
  const jobType = useJobStore(s => s.jobType);
  const skills = useJobStore(s => s.skills);
  const search = useJobStore(s => s.search);

  const jobs = data.jobs;

  const filteredJobs = useMemo(() => {
    let result = jobs;

    if (jobType) {
      result = result.filter(j => j.jobType === jobType);
    }

    if (skills.length > 0) {
      result = result.filter(j =>
        skills.every(skill => j.skills.includes(skill))
      );
    }

    if (search) {
      const s = search.toLowerCase();
      result = result.filter(j =>
        j.title.toLowerCase().includes(s)
      );
    }

    return result;
  }, [jobs, jobType, skills, search]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Jobs Loaded: {filteredJobs.length}</h2>

      {filteredJobs.map(job => (
        <div
          key={job.id}
          data-testid={`job-card-${job.id}`}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}
