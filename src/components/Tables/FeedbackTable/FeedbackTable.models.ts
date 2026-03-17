export interface Opinion {
  opinion_id: number;
  feedback_excerpt: string;
  category: string;
  subcategory: string;
  sentiment: "positive" | "negative" | "neutral";
  sentiment_score: number;
}

export interface Feedback {
  feedback_id: number;
  submitted_at: string;
  department: string;
  feedback_text: string;
  overall_sentiment: "positive" | "negative" | "neutral";
  overall_sentiment_score: number;
  opinions: Opinion[];
}

export interface FeedbackTableRow {
  opinionId: number;
  feedbackId: number;
  date: string;
  sentiment: "positive" | "negative" | "neutral";
  excerpt: string;
  department: string;
  category: string;
  subcategory: string;
  score: number;
  fullStatement: string;
}

export interface FeedbackTableProps {
  data: Feedback[];
}
