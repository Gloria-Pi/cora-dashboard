import { useState } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Navbar from "../../components/Menus/Navbar/Navbar";
import Sidebar from "../../components/Menus/Sidebar/Sidebar";
import Overlay from "../../components/Overlay/Overlay";
import { BREAKPOINTS } from "../../constants/global.constants";
import CollapseContext from "../../contexts/CollapseContext";
import { useIsBelowBreakpoint } from "../../hooks/useIsBelowBreakpoint";
import useStopAnimation from "../../hooks/useStopAnimation";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const isMobile = useIsBelowBreakpoint(BREAKPOINTS.md);
  const stopAnimation = useStopAnimation();
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

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
        })}
      >
        {isMobile && <Navbar onMenuToggle={toggleCollapse} title="CORA" />}

        {isMobile && !isCollapsed && <Overlay onClick={toggleCollapse} />}

        <aside
          className={classNames("DashboardLayout__sidebar", {
            ["DashboardLayout__sidebar--expanded"]:
              stopAnimation && !isCollapsed,
            ["DashboardLayout__sidebar--expanded-animation"]:
              !isCollapsed && isMobile,
          })}
          onClick={handleSidebarClick}
        >
          <Sidebar
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
