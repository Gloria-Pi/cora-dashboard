import type { DotItemDotProps } from "recharts";

import type { ISentimentIconSet } from "../SentimentIcon/SentimentIcon.models";

export default interface CustomSentimentDotProps extends DotItemDotProps {
  icons?: ISentimentIconSet;
  size?: number;
}
