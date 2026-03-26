import type { IFeedback, IPolarity } from "../../../constants/global.constants";
import type { FeedbackCategory } from "../../../mock/feedbacks";

export interface IFeedbackTableRow {
  opinionId: number;
  feedbackId: number;
  date: string;
  sentiment: IPolarity;
  excerpt: string;
  department: string;
  category: FeedbackCategory;
  subcategory: string;
  score: number;
  fullStatement: string;
}

export interface FeedbackTableProps {
  data: IFeedback[];
}
