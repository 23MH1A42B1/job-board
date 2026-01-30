import Layout from "../layout/Layout";
import useJobs from "../hooks/useJobs";
import JobsToolbar from "../components/JobsToolbar";
import JobList from "../components/JobList";

export default function JobsPage() {
  const { data } = useJobs();

  if (!data) return <p>Loading...</p>;

  return (
    <Layout>
      <JobsToolbar />
      <div className="mt-6">
        <JobList jobs={data.jobs} />
      </div>
    </Layout>
  );
}
