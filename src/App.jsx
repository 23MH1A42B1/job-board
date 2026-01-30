import { lazy, Suspense } from "react";

const JobsPage = lazy(() => import("./pages/JobsPage"));
const TrackerPage = lazy(() => import("./pages/TrackerPage"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<JobsPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </Suspense>
  );
}
