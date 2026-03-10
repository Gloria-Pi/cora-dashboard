import { Pie, PieChart, Tooltip } from "recharts";

import type { CustomPieChartProps } from "./CustomPieChart.models";

export default function CustomPieChart({
  data,
  outerRadius,
  innerRadius,
}: CustomPieChartProps) {
  return (
    <PieChart margin={{ top: 20, bottom: 20, right: 30, left: 30 }}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        outerRadius={outerRadius}
        innerRadius={innerRadius}
        cornerRadius={4}
        paddingAngle={3}
        isAnimationActive={true}
        animationDuration={1000}
        label={({ name, percent }) => {
          if (percent === undefined) return 0;
          return `${name} - ${(percent * 100).toFixed(0)}%`;
        }}
        labelLine={false}
      />
      <Tooltip
        formatter={(value) => `${value} feedbacks`}
        contentStyle={{ borderRadius: "10px" }}
      />
    </PieChart>
  );
}
