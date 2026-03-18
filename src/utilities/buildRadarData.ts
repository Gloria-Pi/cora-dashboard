import type IFeedbackChart from "../constants/global.constants";

export function buildRadarData(feedbacks: IFeedbackChart[]) {
  const categoryMap: Record<string, number[]> = {};

  feedbacks.forEach((feedback) => {
    feedback.opinions.forEach((opinion) => {
      if (!categoryMap[opinion.category]) {
        categoryMap[opinion.category] = [];
      }

      categoryMap[opinion.category].push(opinion.sentiment_score);
    });
  });

  return Object.entries(categoryMap).map(([category, scores]) => {
    const avg = scores.reduce((sum, s) => sum + s, 0) / scores.length;

    const score0to10 = (avg + 1) * 5;

    return {
      category,
      score: Number(score0to10.toFixed(2)),
    };
  });
}
