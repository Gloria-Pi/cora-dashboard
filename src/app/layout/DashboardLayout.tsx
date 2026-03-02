import { Outlet } from "react-router";

import Sidebar from "../../components/Sidebar/Sidebar";

export default function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
