export interface AdminItemProps {
  label: string;
  icon: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  onNavigate?: () => void;
}
