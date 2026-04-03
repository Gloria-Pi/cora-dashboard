import type { AdminItemProps } from "./AdminItem/AdminItem.models";

export default interface AdminDropdownProps {
  items: AdminItemProps[]; //QUI NON USO UNA INTERFACCIA, DOVREI CREARNE UNA MA SAREBBE CODICE DUPLICATO... WHAT TO DO?
  onClick: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}
