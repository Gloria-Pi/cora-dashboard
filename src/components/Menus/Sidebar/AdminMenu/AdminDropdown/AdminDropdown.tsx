import classNames from "classnames";

import { useCollapse } from "../../../../../contexts/CollapseContext";

import type AdminDropdownProps from "./AdminDropdown.models";
import "./AdminDropdown.scss";
import AdminItem from "./AdminItem/AdminItem";

export default function AdminDropdown({
  items,
  onClick,
  dropdownRef,
}: AdminDropdownProps) {
  const { isCollapsed, handleNavigation } = useCollapse();

  const handleItemClick = (onItemClick: (e: React.MouseEvent) => void) => {
    return (e: React.MouseEvent) => {
      onItemClick(e);
      onClick?.(); // close dropdown when clicking one of the items
      handleNavigation(); // close sidebar when clicking on a NavItem
    };
  };

  return (
    <>
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
            title={item?.title}
            to={item?.to}
          />
        ))}
      </div>
    </>
  );
}
