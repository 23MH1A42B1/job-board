import Layout from "../layout/Layout";
import useJobs from "../hooks/useJobs";
import useJobStore from "../store/useJobStore";
import JobList from "../components/JobList";

export default function TrackerPage() {
  const { data } = useJobs();
  const { bookmarkedJobs } = useJobStore();

  const jobs = data.jobs.filter((j) =>
    bookmarkedJobs.includes(j.id)
  );

  return (
    <Layout>
      <h2 className="text-lg font-semibold mb-4">
        Bookmarked Jobs
      </h2>
      <JobList jobs={jobs} />
    </Layout>
  );
}
