import type { IFeedback } from "../../../../constants/global.constants";

export default interface ExpandedRowProps {
  feedbackData: IFeedback;
  onOpinionClick: (opinionId: number) => void;
  onClose: () => void;
}
