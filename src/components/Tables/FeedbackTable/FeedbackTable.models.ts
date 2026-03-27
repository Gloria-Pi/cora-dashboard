import type { IFeedback, IPolarity } from "../../../constants/global.constants";
import type { Department, FeedbackCategory } from "../../../mock/feedbacks";

export interface IFeedbackTableRow {
  opinionId: number;
  feedbackId: number;
  date: string;
  sentiment: IPolarity;
  excerpt: string;
  department: Department;
  category: FeedbackCategory;
  subcategory: string;
  score: number;
  fullStatement: string;
}

export interface FeedbackTableProps {
  data: IFeedback[];
}
