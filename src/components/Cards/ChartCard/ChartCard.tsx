import { ResponsiveContainer } from "recharts";

import type ChartCardProps from "./ChartCard.models";
import "./ChartCard.scss";

export default function Card({
  title,
  description,
  minHeight,
  children,
}: ChartCardProps) {
  return (
    <div
      className="Chart-card"
      style={
        {
          // display: "flex",
          // flexWrap: "wrap",
          // width: "100%",
          // minHeight: "300px",
          // border: "1px solid ",
          // padding: "10px",
          // justifyContent: "space-around",
          // alignItems: "stretch",
        }
      }
    >
      <h2 className="Chart-card__title">{title}</h2>
      {description && <p className="Chart-card__title">{description}</p>}
      <ResponsiveContainer width="100%" height="100%" minHeight={minHeight}>
        {children}
      </ResponsiveContainer>
    </div>
  );
}
