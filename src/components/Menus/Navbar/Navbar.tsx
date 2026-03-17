import { ListIcon, UserCircleIcon } from "@phosphor-icons/react";

import type NavbarProps from "./Navbar.models";
import "./Navbar.scss";

export default function Navbar({ onMenuToggle, title }: NavbarProps) {
  return (
    <nav className="Navbar">
      <button className="Navbar__hamburger" onClick={onMenuToggle}>
        <ListIcon size={28} weight="light" />
      </button>

      <span className="Navbar__title">{title}</span>

      <button className="Navbar__user">
        <UserCircleIcon size={32} weight="light" />
      </button>
    </nav>
  );
}
