import type { Department, FeedbackCategory } from "../mock/feedbacks";

/* SENTIMENT ANALYSIS */
export type IPolarity = "positive" | "negative" | "neutral";

/* MOCK DATA */
export interface IOpinion {
  opinion_id: number;
  feedback_excerpt: string;
  category: FeedbackCategory;
  subcategory: string;
  sentiment: IPolarity;
  sentiment_score: number;
}

export interface IFeedback {
  feedback_id: number;
  submitted_at: string;
  department: Department;
  feedback_text: string;
  overall_sentiment: IPolarity;
  overall_sentiment_score: number;
  opinions: IOpinion[];
}

/* CHARTS */
export interface IRechartsData {
  [key: string]: string | number | null;
}

export default interface IFeedbackChart {
  opinions: {
    category: FeedbackCategory;
    sentiment_score: number;
  }[];
}
