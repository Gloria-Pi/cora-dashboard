import { useSentiment } from "../../../utilities/useSentiment";
import SentimentIcon from "../SentimentIcon/SentimentIcon";

import type CustomSentimentDotProps from "./CustomSentimentDot.models";

const CustomSentimentDot = ({
  cy,
  cx,
  value,
  icons,
  size = 18,
}: CustomSentimentDotProps) => {
  const sentiment = useSentiment(value);

  if (cx == null || cy == null || value == null) return <g />;

  return (
    <g transform={`translate(${cx - size / 2}, ${cy - size / 2})`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size / 2.4}
        fill="white"
        stroke="white"
        strokeWidth={1}
      />
      <SentimentIcon sentiment={sentiment} size={size} icons={icons} />
    </g>
  );
};

export default CustomSentimentDot;
