import { UserCircleIcon } from "@phosphor-icons/react";

import { useEffect, useRef, useState } from "react";

import { ADMIN_ITEMS } from "../../../../constants/navigation.constants";
import { useCollapse } from "../../../../contexts/CollapseContext";
import RotatingCaretDown from "../../../Icons/RotatingCaretDown/RotatingCaretDown";

import AdminDropdown from "./AdminDropdown/AdminDropdown";
import type AdminMenuProps from "./AdminMenu.models";
import "./AdminMenu.scss";

export default function AdminMenu({ name, role }: AdminMenuProps) {
  const { isCollapsed } = useCollapse();
  const [adminOpen, setAdminOpen] = useState(false);

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setAdminOpen(!adminOpen);
  const closeMenu = () => setAdminOpen(false);

  // Clicks outside handler to close the menu
  useEffect(() => {
    const handleClickOutsideDropdown = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return;

      if (
        !toggleButtonRef.current?.contains(e.target) &&
        !dropdownRef.current?.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
  }, []);

  return (
    <div className="AdminMenu">
      {adminOpen && (
        <AdminDropdown
          items={ADMIN_ITEMS}
          onClick={closeMenu} // called when item inside dropdown is clicked
          dropdownRef={dropdownRef}
        />
      )}

      <button
        className="AdminMenu__user"
        ref={toggleButtonRef}
        onClick={toggleMenu}
        title="User"
      >
        <UserCircleIcon size={40} weight="light" />

        {!isCollapsed && (
          <>
            <div className="AdminMenu__user__profile">
              <p className="AdminMenu__user__profile__name">{name}</p>
              <p className="AdminMenu__user__profile__role">{role}</p>
            </div>

            <RotatingCaretDown condition={adminOpen} />
          </>
        )}
      </button>
    </div>
  );
}
