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

  setViewMode: (mode) => set({ viewMode: mode }),
  setJobType: (type) => set({ jobType: type }),
  setSkills: (skills) => set({ skills }),
  setSalaryRange: (range) => set({ salaryRange: range }),
  setSearch: (search) => set({ search }),
  setSort: (sort) => set({ sort }),
  setPage: (page) => set({ page }),

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
