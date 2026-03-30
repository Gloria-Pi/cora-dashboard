import { useEffect, useState } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Navbar from "../../components/Menus/Navbar/Navbar";
import Sidebar from "../../components/Menus/Sidebar/Sidebar";
import Overlay from "../../components/Overlay/Overlay";
import CollapseContext from "../../contexts/CollapseContext";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <CollapseContext value={{ isCollapsed, toggleCollapse }}>
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
