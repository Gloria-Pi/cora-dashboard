import type INavItem from "../../../NavItem/NavItem.models";

export interface AdminItemProps extends Partial<INavItem> {
  icon: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent) => void;
}
