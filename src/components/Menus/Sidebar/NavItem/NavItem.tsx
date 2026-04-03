import classNames from "classnames";
import { NavLink } from "react-router";

import { useCollapse } from "../../../../contexts/CollapseContext";

import type { NavItemProps } from "./NavItem.models";
import "./NavItem.scss";

export default function NavItem({
  icon,
  label,
  to,
  title,
  onNavigate,
}: NavItemProps) {
  const { isCollapsed } = useCollapse();

  return (
    <NavLink
      to={to}
      title={title}
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
