import type { Icon } from "@phosphor-icons/react";

export default interface CardProps {
  title: string;
  icon?: Icon;
  value: string | number;
  description?: string;
  //isPositive?
}

//facoltativo, se non viene dato valore la descrizione resterà di colore neutro
