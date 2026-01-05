import { Outlet } from "react-router";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-100">
        <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
          Admin Panel
        </div>
        <AdminSidebar />
        <div className="p-4 border-t border-gray-700 text-sm mt-auto">
          © {new Date().getFullYear()} Shopera
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
        {/* Nested admin pages render here */}
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout;
