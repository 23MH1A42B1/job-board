import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="flex max-w-7xl mx-auto px-4">
        <Sidebar />
        <main className="flex-1 py-6">{children}</main>
      </div>
    </div>
  );
}
