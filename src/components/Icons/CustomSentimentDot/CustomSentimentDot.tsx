// CustomSentimentDot.tsx
import type { DotItemDotProps } from "recharts";

import { useSentiment } from "../../../utilities/useSentiment";
import SentimentIcon from "../SentimentIcon/SentimentIcon";

const CustomSentimentDot = (props: DotItemDotProps) => {
  const { cx, cy, value } = props;

  const sentiment = useSentiment(value);

  if (cx == null || cy == null || value == null) return <g />;

  const size = 20;

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
      <SentimentIcon sentiment={sentiment} size={size} />
    </g>
  );
};

export default CustomSentimentDot;
