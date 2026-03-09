export interface IRechartsData {
  [key: string]: string | number | null;
}

export default interface IFeedback {
  opinions: {
    category: string;
    sentiment_score: number;
  }[];
}
