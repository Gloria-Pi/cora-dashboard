import type { IPolarity } from "../../../constants/global.constants";

export interface ISentimentIconSet {
  positive: React.ReactElement;
  neutral: React.ReactElement;
  negative: React.ReactElement;
}

export interface SentimentIconProps {
  sentiment: IPolarity;
  size?: number;
  icons?: ISentimentIconSet;
}
