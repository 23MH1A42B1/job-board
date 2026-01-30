import useJobStore from "../store/useJobStore";

export default function JobCard({ job }) {
  const bookmarked = useJobStore((s) => s.bookmarkedJobs.includes(job.id));
  const toggleBookmark = useJobStore((s) => s.toggleBookmark);

  return (
    <div data-testid={`job-card-${job.id}`} className="job-card">
      <button
        data-testid={`bookmark-btn-${job.id}`}
        data-bookmarked={bookmarked}
        onClick={() => toggleBookmark(job.id)}
      >
        {bookmarked ? "★" : "☆"}
      </button>

      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>

      <p data-testid="job-salary">${job.salary}</p>

      <div>
        {job.skills.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}
