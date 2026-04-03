import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import CustomSentimentDot from "../../../components/Icons/CustomSentimentDot/CustomSentimentDot";
import CustomizedLabel from "../CustomizedLabel/CustomizedLabel";
import RotatedAxisTick from "../RotatedAxisTick/RotatedAxisTick";

import type { CustomLineChartProps } from "./CustomLineChart.models";

export default function CustomLineChart({ data, icons }: CustomLineChartProps) {
  return (
    <LineChart
      data={data}
      margin={{ top: 20, bottom: 30, right: 20 }}
      accessibilityLayer={true}
    >
      <ReferenceLine stroke="var(--color-gray-charts)" y={0} />
      <Line
        type="bump"
        dataKey="score"
        stroke="var(--color-primary-charts)"
        strokeWidth={2}
        animationDuration={800}
        label={
          <CustomizedLabel stroke="var(--color-primary-charts)" fontSize={14} />
        }
        dot={(props) => (
          <CustomSentimentDot {...props} size={16} icons={icons} />
        )}
      />
      <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
      <XAxis
        dataKey="date"
        height={60}
        tick={(props) => (
          <RotatedAxisTick
            {...props}
            rotation={"rotate(-40)"}
            dy={20}
            dx={-6}
            fontSize={14}
          />
        )}
      />
      <YAxis
        dataKey="score"
        tick={{ fill: "var(--color-gray-charts)", fontSize: 14, dx: -10 }}
      />
      <Tooltip />
    </LineChart>
  );
}
