import { create } from "zustand";

const useJobStore = create((set) => ({
  /* =========================
     VIEW & FILTER STATE
  ========================= */
  viewMode: "grid",        // grid | list
  jobType: "",             // Remote | Hybrid | Onsite
  skills: [],              // ["React", "TypeScript"]
  salaryRange: [0, 200000],
  search: "",
  sort: "",
  page: 1,

  /* =========================
     BOOKMARK STATE
  ========================= */
  bookmarkedJobs: JSON.parse(localStorage.getItem("bookmarkedJobs")) || [],

  /* =========================
     ACTIONS
  ========================= */
  setViewMode: (viewMode) => set({ viewMode }),

  setJobType: (jobType) =>
    set({
      jobType,
      page: 1
    }),

  setSkills: (skills) =>
    set({
      skills,
      page: 1
    }),

  setSalaryRange: (salaryRange) =>
    set({
      salaryRange,
      page: 1
    }),

  setSearch: (search) =>
    set({
      search,
      page: 1
    }),

  setSort: (sort) =>
    set({
      sort
    }),

  setPage: (page) =>
    set({
      page
    }),

  /* =========================
     BOOKMARK TOGGLE
  ========================= */
  toggleBookmark: (id) =>
    set((state) => {
      const updated = state.bookmarkedJobs.includes(id)
        ? state.bookmarkedJobs.filter((jobId) => jobId !== id)
        : [...state.bookmarkedJobs, id];

      localStorage.setItem("bookmarkedJobs", JSON.stringify(updated));
      return { bookmarkedJobs: updated };
    }),

  /* =========================
     CLEAR ALL FILTERS
  ========================= */
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
