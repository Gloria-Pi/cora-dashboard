export type ISentiment = "positive" | "negative" | "neutral";

export interface IOpinion {
  opinion_id: number;
  feedback_excerpt: string;
  category: string;
  subcategory: string;
  sentiment: ISentiment;
  sentiment_score: number;
}

export interface IFeedback {
  feedback_id: number;
  submitted_at: string;
  department: string;
  feedback_text: string;
  overall_sentiment: ISentiment;
  overall_sentiment_score: number;
  opinions: IOpinion[];
}

export interface IFeedbackTableRow {
  opinionId: number;
  feedbackId: number;
  date: string;
  sentiment: ISentiment;
  excerpt: string;
  department: string;
  category: string;
  subcategory: string;
  score: number;
  fullStatement: string;
}

export interface FeedbackTableProps {
  data: IFeedback[];
}
