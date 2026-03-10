import type { IRechartsData } from "../CustomLineChart/CustomLineChart.models";

export interface CustomPieChartProps {
  data: IRechartsData[];
  outerRadius: string;
  innerRadius: string;
}
