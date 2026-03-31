import { useEffect, useState } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Navbar from "../../components/Menus/Navbar/Navbar";
import Sidebar from "../../components/Menus/Sidebar/Sidebar";
import Overlay from "../../components/Overlay/Overlay";
import CollapseContext from "../../contexts/CollapseContext";
import { useIsMobile } from "../../hooks/useIsMobile";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const isMobile = useIsMobile();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavigation = () => {
    setIsCollapsed(isMobile || isCollapsed ? true : false);
  };

  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <CollapseContext value={{ isCollapsed, toggleCollapse, handleNavigation }}>
      <div
        className={classNames("DashboardLayout", {
          ["DashboardLayout--collapsed"]: isCollapsed && !isMobile,
          ["DashboardLayout--mobile-show"]: isCollapsed,
        })}
      >
        {isMobile && <Navbar onMenuToggle={toggleCollapse} title="CORA" />}

        {isMobile && !isCollapsed && <Overlay onClick={toggleCollapse} />}

        <aside
          className={classNames("DashboardLayout__sidebar", {
            ["DashboardLayout__sidebar--mobile-show"]: !isCollapsed,
          })}
          onClick={handleSidebarClick}
        >
          <Sidebar
            isCollapsed={isCollapsed && !isMobile}
            onToggle={toggleCollapse}
            title={"CORA"}
            onNavigate={handleNavigation}
          />
        </aside>

        <main className="DashboardLayout__main">
          <Outlet />
        </main>
      </div>
    </CollapseContext>
  );
}
