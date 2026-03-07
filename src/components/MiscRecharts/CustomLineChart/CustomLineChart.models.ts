export interface IRechartsData {
  [key: string]: string | number | null;
}

export interface CustomLineChartProps {
  data: IRechartsData[];
}
