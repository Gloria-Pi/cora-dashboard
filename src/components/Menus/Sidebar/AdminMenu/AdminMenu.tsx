import { CaretDownIcon, UserCircleIcon } from "@phosphor-icons/react";

import { useEffect, useRef, useState } from "react";

import { ADMIN_ITEMS } from "../../../../constants/navigation.constants";
import { useCollapse } from "../../../../contexts/CollapseContext";

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

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !toggleButtonRef.current?.contains(target) &&
        !dropdownRef.current?.contains(target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="AdminMenu">
      <AdminDropdown
        items={ADMIN_ITEMS}
        adminOpen={adminOpen}
        onClick={closeMenu} // called when item inside dropdown is clicked
        dropdownRef={dropdownRef} // parent controls ref
      />

      <button
        ref={toggleButtonRef}
        className="AdminMenu__user"
        onClick={toggleMenu}
        title="User"
      >
        <UserCircleIcon size={32} weight="light" />

        {!isCollapsed && (
          <>
            <div className="AdminMenu__user__profile">
              <span className="AdminMenu__user__profile__name">{name}</span>
              <span className="AdminMenu__user__profile__role">{role}</span>
            </div>

            <CaretDownIcon
              size={16}
              className={`AdminMenu__user__chevron ${adminOpen ? "rotate" : ""}`}
            />
          </>
        )}
      </button>
    </div>
  );
}
