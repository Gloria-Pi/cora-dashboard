import { Legend, Pie, PieChart, Tooltip } from "recharts";

import { useIsMobile } from "../../../hooks/useIsMobile";

import type { CustomPieChartProps } from "./CustomPieChart.models";

export default function CustomPieChart({
  data,
  outerRadius,
  innerRadius,
}: CustomPieChartProps) {
  const isMobile = useIsMobile(1020);

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
        animationDuration={800}
        label={
          isMobile
            ? false
            : ({ name, percent }) => {
                if (percent === undefined) return 0;
                return `${name} - ${(percent * 100).toFixed(1)}%`;
              }
        }
        labelLine={false}
      />
      {isMobile && (
        <Legend
          verticalAlign="bottom"
          align="center"
          layout="horizontal"
          height={20}
          wrapperStyle={{ marginLeft: 10, marginBottom: 0 }}
          formatter={(value) => (
            <span style={{ fontSize: 16, marginRight: 15 }}>{value}</span>
          )}
        />
      )}
      <Tooltip
        formatter={(value) => `${value} feedbacks`}
        contentStyle={{ borderRadius: "10px" }}
      />
    </PieChart>
  );
}
