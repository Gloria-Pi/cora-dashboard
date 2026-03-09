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
import CustomizedLabel from "../../../components/MiscRecharts/CustomizedLabel";
import RotatedAxisTick from "../../../components/MiscRecharts/RotatedAxisTick";

import type { CustomLineChartProps } from "./CustomLineChart.models";

export default function CustomLineChart({ data, icons }: CustomLineChartProps) {
  return (
    <LineChart
      data={data}
      margin={{ top: 20, bottom: 30, right: 20 }}
      accessibilityLayer={true}
    >
      <ReferenceLine stroke="grey" y={0} />
      <Line
        type="bump"
        dataKey="score"
        stroke="var(--color-primary-charts)"
        strokeWidth={2}
        animationDuration={2000}
        label={<CustomizedLabel stroke="var(--color-primary-charts)" />}
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
      <YAxis dataKey="score" tick={{ fill: "#818589", fontSize: 14 }} />
      <Tooltip />
    </LineChart>
  );
}
