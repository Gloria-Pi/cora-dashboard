import {
  CaretDownIcon,
  ChatCircleDotsIcon,
  GearIcon,
  LightbulbIcon,
  ListIcon,
  SignOutIcon,
  SquaresFourIcon,
  TrendUpIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";

import { useState } from "react";

import classNames from "classnames";
import { NavLink } from "react-router";

import type SidebarProps from "./Sidebar.models";
import "./Sidebar.scss";

const NAV_ITEMS = [
  {
    to: "/overview",
    icon: <SquaresFourIcon size={26} weight="regular" />,
    label: "Overview",
  },
  {
    to: "/opinions",
    icon: <ChatCircleDotsIcon size={26} weight="regular" />,
    label: "Opinions",
  },
  {
    to: "/trends",
    icon: <TrendUpIcon size={26} weight="regular" />,
    label: "Trends",
  },
  {
    to: "/insights",
    icon: <LightbulbIcon size={26} weight="regular" />,
    label: "Insights",
  },
];

export default function Sidebar({
  isCollapsed,
  onToggle,
  title,
  onNavigate,
}: SidebarProps) {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div
      className={classNames("Sidebar", {
        ["Sidebar--collapsed"]: isCollapsed,
      })}
    >
      {/* Top Section */}
      <div className="Sidebar__top">
        {isCollapsed ? (
          <button className="Sidebar__top__toggle" onClick={onToggle}>
            <ListIcon size={28} weight="light" />
          </button>
        ) : (
          <>
            <span className="Sidebar__top__title">{title}</span>
            <button className="Sidebar__top__toggle" onClick={onToggle}>
              <ListIcon size={28} weight="light" />
            </button>
          </>
        )}
      </div>

      <hr className="Sidebar__divider" />

      {/* Nav Section */}

      <nav className="Sidebar__nav">
        {NAV_ITEMS.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            isCollapsed={isCollapsed}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <hr className="Sidebar__divider" />

      {/* Admin Section */}

      <div className="Sidebar__admin">
        {adminOpen && !isCollapsed && (
          <div className="Sidebar__admin__dropdown">
            <button className="Sidebar__admin__dropdown__item">
              <GearIcon size={18} />
              <span>Settings</span>
            </button>
            <button className="Sidebar__admin__dropdown__item">
              <SignOutIcon size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}

        <button
          className="Sidebar__info"
          onClick={() => setAdminOpen(!adminOpen)}
        >
          {isCollapsed ? (
            <UserCircleIcon size={32} weight="light" />
          ) : (
            <>
              <UserCircleIcon size={32} weight="light" />
              <div className="Sidebar__profile">
                <span className="Sidebar__profile__name">Mario Rossi</span>
                <span className="Sidebar__profile__role">HR Manager</span>
              </div>
              <CaretDownIcon
                size={16}
                className={`chevron ${adminOpen ? "rotate" : ""}`}
              />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isCollapsed: boolean;
  onNavigate?: () => void;
}

function NavItem({ icon, label, to, isCollapsed, onNavigate }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      className={({ isActive }) =>
        classNames("NavItem", { "NavItem--active": isActive })
      }
    >
      {icon}
      {!isCollapsed && <span>{label}</span>}
    </NavLink>
  );
}
