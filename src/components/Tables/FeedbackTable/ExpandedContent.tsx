import type { IFeedback } from "./FeedbackTable.models";
import OpinionCard from "./OpinionCard";

interface ExpandedContentProps {
  feedbackData: IFeedback;
  onOpinionClick: (opinionId: number) => void;
  formatCategory: (text: string) => string;
  capitalizeSentiment: (sentiment: string) => string;
}

export default function ExpandedContent({
  feedbackData,
  onOpinionClick,
  formatCategory,
  capitalizeSentiment,
}: ExpandedContentProps) {
  return (
    <tr className="table__expanded-content">
      <td colSpan={8}>
        <div className="table__expanded-content__container">
          {/* Full Feedback Card */}
          <div className="feedback-card">
            <div className="feedback-card__header">Full Feedback Statement</div>
            <div className="feedback-card__text">
              {feedbackData.feedback_text}
            </div>
          </div>

          {/* Opinions Grid */}
          {feedbackData.opinions.length > 1 && (
            <div className="opinions-section">
              <div className="opinions-section__header">
                Related Opinions ({feedbackData.opinions.length})
              </div>
              <div className="opinions-grid">
                {feedbackData.opinions.map((opinion) => (
                  <OpinionCard
                    key={opinion.opinion_id}
                    opinion={opinion}
                    onClick={onOpinionClick}
                    formatCategory={formatCategory}
                    capitalizeSentiment={capitalizeSentiment}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
