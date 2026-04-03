import classNames from "classnames";
import { NavLink } from "react-router";

import { useCollapse } from "../../../../../../contexts/CollapseContext";

import type { AdminItemProps } from "./AdminItem.models";
import "./AdminItem.scss";

export default function AdminItem({
  label,
  icon,
  onClick,
  to,
  title,
}: AdminItemProps) {
  const { isCollapsed } = useCollapse();

  return (
    <>
      {to && (
        <NavLink
          to={to}
          title={title}
          onClick={onClick}
          className={classNames("AdminItem", {
            "AdminItem--collapsed": isCollapsed,
          })}
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      )}

      {!to && (
        <button
          className={classNames("AdminItem", {
            ["AdminItem--collapsed"]: isCollapsed,
          })}
          onClick={onClick}
        >
          {icon}
          <span>{label}</span>
        </button>
      )}
    </>
  );
}
