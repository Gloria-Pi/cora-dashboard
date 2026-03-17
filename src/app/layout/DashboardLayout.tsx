import { useState } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Sidebar from "../../components/Menus/Sidebar/Sidebar";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div
      className={classNames("DashboardLayout", {
        ["DashboardLayout--collapsed"]: isCollapsed,
      })}
    >
      <aside className="DashboardLayout__sidebar">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggle={handleCollapse}
          title={"CORA"}
        />
      </aside>

      <main className="DashboardLayout__main">
        <Outlet />
      </main>
    </div>
  );
}
