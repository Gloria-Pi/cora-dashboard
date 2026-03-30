import classNames from "classnames";

import { useCollapse } from "../../../../../contexts/CollapseContext";

import type AdminDropdownProps from "./AdminDropdown.models";
import "./AdminDropdown.scss";
import AdminItem from "./AdminItem/AdminItem";

export default function AdminDropdown({
  items,
  adminOpen,
  onClick,
  dropdownRef,
}: AdminDropdownProps) {
  const { isCollapsed } = useCollapse();

  const handleItemClick = (itemClick?: (e: React.MouseEvent) => void) => {
    return (e: React.MouseEvent) => {
      itemClick?.(e);
      onClick?.(); // close dropdown
    };
  };

  return (
    <>
      {adminOpen && (
        <div
          ref={dropdownRef}
          className={classNames("AdminDropdown", {
            ["AdminDropdown--collapsed"]: isCollapsed,
          })}
        >
          {items.map((item, index) => (
            <AdminItem
              key={index}
              icon={item.icon}
              label={item.label}
              onClick={handleItemClick(item.onClick)}
            />
          ))}
        </div>
      )}
    </>
  );
}
