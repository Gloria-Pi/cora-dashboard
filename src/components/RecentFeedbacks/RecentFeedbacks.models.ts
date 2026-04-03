import type { IFeedback } from "../../constants/global.constants";

export default interface RecentFeedbacksProps {
  title: string;
  navText: string;
  data: IFeedback[];
  maxItems?: number;
}
