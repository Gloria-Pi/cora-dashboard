export function useSentiment(score?: number) {
  if (score == null) return "neutral";
  if (score >= 0.3) return "positive";
  if (score <= -0.3) return "negative";
  return "neutral";
}
