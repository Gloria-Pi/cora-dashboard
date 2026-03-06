// SentimentIcon.tsx
import {
  SmileyIcon,
  SmileyMehIcon,
  SmileySadIcon,
} from "@phosphor-icons/react";

import type { SentimentIconProps } from "./SentimentIcon.models";

export default function SentimentIcon({
  sentiment,
  size = 18,
}: SentimentIconProps) {
  switch (sentiment) {
    case "positive":
      return <SmileyIcon size={size} color="#22c55e" weight="fill" />;
    case "negative":
      return <SmileySadIcon size={size} color="#ef4444" weight="fill" />;
    default:
      return <SmileyMehIcon size={size} color="#eab308" weight="fill" />;
  }
}
