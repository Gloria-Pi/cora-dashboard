import { ListIcon } from "@phosphor-icons/react";

import classNames from "classnames";

import { NAV_ITEMS } from "../../../constants/navigation.constants";
import { useCollapse } from "../../../contexts/CollapseContext";

import AdminMenu from "./AdminMenu/AdminMenu";
import NavItem from "./NavItem/NavItem";
import type SidebarProps from "./Sidebar.models";
import "./Sidebar.scss";

export default function Sidebar({ title, onToggle, onNavigate }: SidebarProps) {
  const { isCollapsed } = useCollapse();

  return (
    <div
      className={classNames("Sidebar", {
        ["Sidebar--collapsed"]: isCollapsed,
      })}
    >
      {/* Header Section */}
      <div className="Sidebar__top">
        {!isCollapsed && <span className="Sidebar__top__title">{title}</span>}
        <button className="Sidebar__top__toggle" onClick={onToggle}>
          <ListIcon size={28} weight="regular" />
        </button>
      </div>

      <hr className="Sidebar__divider" />

      {/* Nav Section */}

      <nav className="Sidebar__nav">
        {NAV_ITEMS.map((item, index) => (
          <NavItem
            key={index}
            to={item.to}
            icon={item.icon}
            label={item.label}
            title={item.title}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <hr className="Sidebar__divider" />

      {/* Admin Section */}
      <div className="Sidebar__admin">
        <AdminMenu
          name="Mario Rossi" //DA RENDERE DINAMICO
          role="HR Manager" //DA RENDERE DINAMICO
        />
      </div>
    </div>
  );
}
