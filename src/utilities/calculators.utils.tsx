import type { IFeedback, IPolarity } from "../constants/global.constants";

export function getNoFeedbacksBySentiment(
  data: IFeedback[],
  sentiment: IPolarity,
): number {
  return data.reduce((acc: number, feedback: IFeedback) => {
    return feedback.overall_sentiment === sentiment ? (acc += 1) : (acc += 0);
  }, 0);
}

export function getNoOpinionsBySentiment(
  data: IFeedback[],
  sentiment: IPolarity,
): number {
  return data.reduce((acc: number, feedback: IFeedback) => {
    const count = feedback.opinions.reduce((innerAcc, opinion) => {
      return innerAcc + (opinion.sentiment === sentiment ? 1 : 0);
    }, 0);

    return acc + count;
  }, 0);
}

export function getAvgScore(data: IFeedback[]): string {
  const scoreSum = data.reduce((acc: number, feedback: IFeedback) => {
    return (acc += feedback.overall_sentiment_score);
  }, 0);
  return (scoreSum / data.length).toFixed(2);
}
