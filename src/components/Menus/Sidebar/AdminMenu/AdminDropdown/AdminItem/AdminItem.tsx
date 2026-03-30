import classNames from "classnames";

import { useCollapse } from "../../../../../../contexts/CollapseContext";

import type { AdminItemProps } from "./AdminItem.models";
import "./AdminItem.scss";

export default function AdminItem({ label, icon, onClick }: AdminItemProps) {
  const { isCollapsed } = useCollapse();

  return (
    <button
      className={classNames("AdminItem", {
        ["AdminItem--collapsed"]: isCollapsed,
      })}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
