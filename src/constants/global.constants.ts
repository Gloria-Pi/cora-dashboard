import type { Department, FeedbackCategory } from "../mock/feedbacks";

/* BREAKPOINT */

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
} as const;

export type BreakpointsType = (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];

/* SENTIMENT ANALYSIS */
export type IPolarity = "positive" | "negative" | "neutral";

/* MOCK DATA */
// Represents data structure of the db
export interface IFeedback {
  feedback_id: number;
  submitted_at: string;
  department: Department;
  feedback_text: string;
  overall_sentiment: IPolarity;
  overall_sentiment_score: number;
  opinions: IOpinion[];
}

export interface IOpinion {
  opinion_id: number;
  feedback_excerpt: string;
  category: FeedbackCategory;
  subcategory: string;
  sentiment: IPolarity;
  sentiment_score: number;
}

/* TABLE */
// Data resulting from the manipulation of IFeedback, useful for creating table rows
export interface IOpinionTableRow {
  opinionId: number;
  excerpt: string;
  sentiment: IPolarity;
  category: FeedbackCategory;
  subcategory: string;
  score: number;

  feedbackId: number;
  date: string;
  department: Department;
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

/* PHOSPHORICONS */

export type PhosphorWeightType =
  | "bold"
  | "duotone"
  | "light"
  | "fill"
  | "regular"
  | "thin";
