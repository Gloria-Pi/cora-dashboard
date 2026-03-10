import type { IRechartsData } from "../../../constants/global.constants";
import type { ISentimentIconSet } from "../../Icons/SentimentIcon/SentimentIcon.models";

export interface CustomLineChartProps {
  data: IRechartsData[];
  icons?: ISentimentIconSet;
}
