import useSWR from "swr";
import data from "../data/mock-data.json";

const fetcher = () => data;

export default function useJobs() {
  return useSWR("jobs", fetcher);
}
