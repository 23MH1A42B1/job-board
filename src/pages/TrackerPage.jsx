import data from "../data/mock-data.json";
import useJobStore from "../store/useJobStore";
import JobList from "../components/JobList";

export default function TrackerPage() {
  const bookmarked = useJobStore((s) => s.bookmarkedJobs);
  const jobs = data.jobs.filter((j) => bookmarked.includes(j.id));

  return <JobList jobs={jobs} />;
}
