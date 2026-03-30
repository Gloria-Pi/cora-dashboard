export default interface INavItem {
  icon: React.ReactNode;
  label: string;
  to: string;
  title: string;
}

export interface NavItemProps extends INavItem {
  onNavigate?: () => void;
}
