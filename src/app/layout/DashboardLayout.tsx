import { useState } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Grid from "../../components/Grid/Grid";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Grid
      wrapperClass="DashboardLayout"
      gridClass={classNames("DashboardLayout__grid", {
        "DashboardLayout--collapsed": isCollapsed,
      })}
    >
      <aside className="DashboardLayout__sidebar">
        <Sidebar
          isCollapsed={isCollapsed}
          onToggle={handleCollapse}
          title={"CORA"}
        />
      </aside>

      <main className="DashboardLayout__content">
        <Outlet />
      </main>
    </Grid>
  );
}
