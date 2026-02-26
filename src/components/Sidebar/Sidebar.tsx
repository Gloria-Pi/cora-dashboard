import { useState } from "react";
import {
  ListIcon,
  SquaresFourIcon,
  ChatCircleDotsIcon,
  TrendUpIcon,
  LightbulbIcon,
  CaretDownIcon,
  GearIcon,
  SignOutIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

import "./Sidebar.css";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Top */}
      <div className="sidebar-top">
        <button className="hamburger" onClick={() => setCollapsed(!collapsed)}>
          <ListIcon size={22} weight="bold" />
        </button>

        {!collapsed && <h1 className="sidebar-title">cora</h1>}
      </div>

      <hr className="divider" />

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavItem
          to="/overview"
          icon={<SquaresFourIcon size={20} weight="duotone" />}
          label="Overview"
          collapsed={collapsed}
        />
        <NavItem
          to="/opinions"
          icon={<ChatCircleDotsIcon size={20} weight="duotone" />}
          label="Opinions"
          collapsed={collapsed}
        />
        <NavItem
          to="/trends"
          icon={<TrendUpIcon size={20} weight="duotone" />}
          label="Trends"
          collapsed={collapsed}
        />
        <NavItem
          to="/insights"
          icon={<LightbulbIcon size={20} weight="duotone" />}
          label="Insights"
          collapsed={collapsed}
        />
      </nav>

      <hr className="divider" />

      {/* Admin Section */}
      <div className="sidebar-admin">
        {adminOpen && !collapsed && (
          <div className="admin-dropdown">
            <button className="dropdown-item">
              <GearIcon size={18} />
              <span>Settings</span>
            </button>
            <button className="dropdown-item">
              <SignOutIcon size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}

        <button className="admin-info" onClick={() => setAdminOpen(!adminOpen)}>
          <CaretDownIcon
            size={16}
            className={`chevron ${adminOpen ? "rotate" : ""}`}
          />

          {!collapsed && (
            <>
              <UserCircleIcon size={32} weight="duotone" />
              <div className="admin-text">
                <span className="admin-name">Mario Rossi</span>
                <span className="admin-role">HR Manager</span>
              </div>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

import { NavLink } from "react-router";

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
};

function NavItem({ icon, label, to, collapsed }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}
