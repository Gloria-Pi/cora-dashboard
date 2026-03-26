import type { IPolarity } from "../../../constants/global.constants";
import type { FeedbackCategory } from "../../../mock/feedbacks";

export interface StatementCardProps {
  sentiment: IPolarity;
  category: FeedbackCategory;
  date: string;
  feedbackText: string;
}
