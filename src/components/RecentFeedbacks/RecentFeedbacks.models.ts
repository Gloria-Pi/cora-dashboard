import type { IDataContext } from "../../contexts/DataContext.models";

export default interface RecentFeedbacksProps {
  title: string;
  navText: string;
  data: IDataContext;
  maxItems?: number;
}
