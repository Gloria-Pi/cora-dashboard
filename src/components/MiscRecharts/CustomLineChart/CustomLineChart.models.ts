import type { ISentimentIconSet } from "../../Icons/SentimentIcon/SentimentIcon.models";

export interface IRechartsData {
  [key: string]: string | number | null;
}

export interface CustomLineChartProps {
  data: IRechartsData[];
  icons?: ISentimentIconSet;
}
