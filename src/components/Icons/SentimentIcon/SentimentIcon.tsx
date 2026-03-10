import { CircleIcon } from "@phosphor-icons/react";

import type { SentimentIconProps } from "./SentimentIcon.models";

export default function SentimentIcon({
  sentiment,
  size = 18,
  icons,
}: SentimentIconProps) {
  // fallback icons if none are provided
  const defaultIcons = {
    positive: (
      <CircleIcon
        size={size}
        color="var(--color-positive-trend)"
        weight="fill"
      />
    ),
    neutral: (
      <CircleIcon
        size={size}
        color="var(--color-neutral-trend)"
        weight="fill"
      />
    ),
    negative: (
      <CircleIcon
        size={size}
        color="var(--color-negative-trend)"
        weight="fill"
      />
    ),
  };

  const chosenIcons = icons ?? defaultIcons;

  switch (sentiment) {
    case "positive":
      return chosenIcons.positive;
    case "negative":
      return chosenIcons.negative;
    default:
      return chosenIcons.neutral;
  }
}
