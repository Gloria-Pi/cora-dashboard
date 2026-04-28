import type { FeedbackCategory } from "../mock/feedbacks";

import type { IPolarity } from "./global.constants";

export type ISummaryData = {
  type: IPolarity;
  points: string[];
};
export type ICategorySummaryData = {
  category: FeedbackCategory;
  points: string[];
};
