import type { IFeedback } from "../Tables/FeedbackTable/FeedbackTable.models";

export default interface RecentFeedbacksProps {
  data: IFeedback[];
  maxItems?: number;
}
