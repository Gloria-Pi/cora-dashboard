import type { Icon } from "@phosphor-icons/react";

export default interface CardProps {
  title: string;
  icon?: Icon;
  value: string;
  description?: string;
}
