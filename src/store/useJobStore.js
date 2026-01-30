import { create } from "zustand";

const useJobStore = create((set) => ({
  viewMode: "grid",
  jobType: "",
  skills: [],
  salaryRange: [0, 200000],
  search: "",
  sort: "",
  page: 1,
  bookmarkedJobs: JSON.parse(localStorage.getItem("bookmarkedJobs")) || [],

  setViewMode: (v) => set({ viewMode: v }),
  setJobType: (v) => set({ jobType: v, page: 1 }),
  setSkills: (v) => set({ skills: v, page: 1 }),
  setSalaryRange: (v) => set({ salaryRange: v, page: 1 }),
  setSearch: (v) => set({ search: v, page: 1 }),
  setSort: (v) => set({ sort: v }),
  setPage: (v) => set({ page: v }),

  toggleBookmark: (id) =>
    set((state) => {
      const updated = state.bookmarkedJobs.includes(id)
        ? state.bookmarkedJobs.filter((j) => j !== id)
        : [...state.bookmarkedJobs, id];

      localStorage.setItem("bookmarkedJobs", JSON.stringify(updated));
      return { bookmarkedJobs: updated };
    }),

  clearFilters: () =>
    set({
      jobType: "",
      skills: [],
      salaryRange: [0, 200000],
      search: "",
      sort: "",
      page: 1
    })
}));

export default useJobStore;
