import { Pie, PieChart, Tooltip } from "recharts";

import type { CustomPieChartProps } from "./CustomPieChart.models";
import "./CustomPieChart.scss";

export default function CustomPieChart({
  data,
  outerRadius,
  innerRadius,
}: CustomPieChartProps) {
  return (
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        isAnimationActive={true}
        label={({ name, value }) => `${name}: ${value}%`}
        labelLine={false}
      />
      <Tooltip />
    </PieChart>
  );
}
