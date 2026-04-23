import type { ReactNode } from "react";

import type { IPolarity } from "../../../constants/global.constants";

export interface SummaryCardProps {
  type?: IPolarity;
  title: string;
  icon: React.ReactNode;
  children: ReactNode;
}
