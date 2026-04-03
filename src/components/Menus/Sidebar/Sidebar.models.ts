export default interface SidebarProps {
  onToggle: () => void;
  title: string;
  onNavigate?: () => void;
}
