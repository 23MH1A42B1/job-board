import { create } from "zustand";

const useJobStore = create(() => ({
  jobType: "",
  skills: [],
  search: ""
}));

export default useJobStore;
