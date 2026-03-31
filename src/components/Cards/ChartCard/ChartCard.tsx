import { ResponsiveContainer } from "recharts";

import type ChartCardProps from "./ChartCard.models";
import "./ChartCard.scss";

export default function ChartCard({
  title,
  description,
  minHeight,
  children,
}: ChartCardProps) {
  return (
    <div className="ChartCard">
      <h3 className="ChartCard__title">{title}</h3>
      {description && <p className="ChartCard__title">{description}</p>}
      <ResponsiveContainer width="100%" height="90%" minHeight={minHeight}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
