import useJobStore from "../store/useJobStore";

export default function JobCard({ job }) {
  const { bookmarkedJobs, toggleBookmark } = useJobStore();
  const isBookmarked = bookmarkedJobs.includes(job.id);

  return (
    <div
      data-testid={`job-card-${job.id}`}
      className="bg-white border rounded-lg p-4 relative"
    >
      <button
        data-testid={`bookmark-btn-${job.id}`}
        data-bookmarked={isBookmarked}
        onClick={() => toggleBookmark(job.id)}
        className="absolute top-4 right-4 text-xl"
      >
        {isBookmarked ? "★" : "☆"}
      </button>

      <h3 className="font-semibold">{job.title}</h3>
      <p className="text-sm text-gray-500">{job.location}</p>

      <p
        data-testid="job-salary"
        className="text-sm font-medium mt-2"
      >
        ${job.salary.toLocaleString()}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs bg-gray-100 px-2 py-1 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
