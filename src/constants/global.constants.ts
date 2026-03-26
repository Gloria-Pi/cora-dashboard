/* CHARTS */
export interface IRechartsData {
  [key: string]: string | number | null;
}

export default interface IFeedbackChart {
  opinions: {
    category: string;
    sentiment_score: number;
  }[];
}
