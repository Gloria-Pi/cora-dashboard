import type { IPolarity } from "../../../constants/global.constants";
import type { FeedbackCategory } from "../../../mock/feedbacks";

export interface FeedbackCardProps {
  sentiment: IPolarity;
  category: FeedbackCategory;
  date: string;
  feedbackText: string;
}
