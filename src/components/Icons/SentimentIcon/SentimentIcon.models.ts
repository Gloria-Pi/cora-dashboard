export interface ISentimentIconSet {
  positive: React.ReactElement;
  neutral: React.ReactElement;
  negative: React.ReactElement;
}

export interface SentimentIconProps {
  sentiment: "positive" | "neutral" | "negative";
  size?: number;
  icons?: ISentimentIconSet;
}
