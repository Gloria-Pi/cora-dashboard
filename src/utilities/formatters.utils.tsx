import {
  SmileyIcon,
  SmileyMehIcon,
  SmileySadIcon,
} from "@phosphor-icons/react";

import type { IPolarity } from "../constants/global.constants";

/* GENERAL */

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/* FEEDBACK TABLE */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatText = (text: string, maxLength: number = 80) => {
  if (text.length <= maxLength) return `"${text}"`;
  return `"${text.substring(0, maxLength)}..."`;
};

/* FEEDBACK CARD */

export function formatCategory(text: string) {
  const formatted = text
    .replace(/[_-]/g, " ")
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
}

/* SENTIMENT PILL */
export function getSentimentIcon(sentiment: IPolarity, size: number) {
  switch (sentiment) {
    case "positive":
      return <SmileyIcon size={size} weight="regular" />;
    case "negative":
      return <SmileySadIcon size={size} weight="regular" />;
    case "neutral":
      return <SmileyMehIcon size={size} weight="regular" />;
  }
}
