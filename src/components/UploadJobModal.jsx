export default function UploadJobModal({ onClose, onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const job = {
      id: Date.now(),
      title: e.target.title.value,
      location: e.target.location.value,
      salary: e.target.salary.value,
      skills: e.target.skills.value.split(",")
    };

    onAdd(job);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <form className="modal" onSubmit={handleSubmit}>
        <h2>Upload Job</h2>

        <input name="title" placeholder="Job title" required />
        <input name="location" placeholder="Location" required />
        <input name="salary" placeholder="Salary" required />
        <input name="skills" placeholder="Skills (comma separated)" />

        <div className="modal-actions">
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Post Job</button>
        </div>
      </form>
    </div>
  );
}
