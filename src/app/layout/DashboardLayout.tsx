import { useState, useEffect } from "react";

import classNames from "classnames";
import { Outlet } from "react-router";

import Navbar from "../../components/Menus/Navbar/Navbar";
import Sidebar from "../../components/Menus/Sidebar/Sidebar";

import "./DashboardLayout.scss";

export default function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
      // Reset collapsed state when entering mobile
      if (window.innerWidth <= 780) {
        setIsCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCollapse = () => {
    // On mobile, close the menu instead of collapsing
    if (isMobile) {
      closeMobileMenu();
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={classNames("DashboardLayout", {
        ["DashboardLayout--collapsed"]: isCollapsed && !isMobile,
        ["DashboardLayout--mobile-open"]: isMobileMenuOpen,
      })}
    >
      <Navbar onMenuToggle={handleMobileMenuToggle} title="CORA" />

      <div
        className={classNames("DashboardLayout__overlay", {
          show: isMobileMenuOpen,
        })}
        onClick={closeMobileMenu}
      />

      <aside
        className={classNames("DashboardLayout__sidebar", {
          ["DashboardLayout__sidebar--mobile-open"]: isMobileMenuOpen,
        })}
        onClick={handleSidebarClick}
      >
        <Sidebar
          isCollapsed={isCollapsed && !isMobile}
          onToggle={handleCollapse}
          title={"CORA"}
          onNavigate={closeMobileMenu}
        />
      </aside>

      <main className="DashboardLayout__main">
        <Outlet />
      </main>
    </div>
  );
}
