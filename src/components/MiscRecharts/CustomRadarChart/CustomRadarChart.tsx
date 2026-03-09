import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

// import CustomizedLabel from "../CustomizedLabel";

import type { CustomRadarChartProps } from "./CustomRadarChart.models";

export default function CustomRadarChart({ data }: CustomRadarChartProps) {
  return (
    <RadarChart
      margin={{ top: 20, bottom: 20, right: 30, left: 30 }}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="category" />
      <PolarRadiusAxis
        domain={[0, 10]}
        tickCount={6}
        axisLine={{ stroke: "#0818A8" }}
        tick={{ fill: "#0818A8", fontSize: 12 }}
      />
      <Radar
        name="Score"
        dataKey="score"
        stroke="var(--color-primary-charts)"
        fill="var(--color-primary-charts)"
        fillOpacity={0.6}
        // label={<CustomizedLabel stroke="#818589" />}
        animationDuration={1200}
      />
      <Tooltip
        formatter={(value) => `${value} points`}
        contentStyle={{ borderRadius: "10px" }}
      />
    </RadarChart>
  );
}
