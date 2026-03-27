import { XIcon } from "@phosphor-icons/react";

import type { IFeedback } from "../../../../constants/global.constants";
import type { Department } from "../../../../mock/feedbacks";
import OpinionCard from "../OpinionCard";

interface FeedbackModalProps {
  onClose: () => void;
  feedbackData: IFeedback | undefined;
  date: string;
  department: Department;
  onOpinionClick: (opinionId: number) => void;
  formatDate: (dateString: string) => string;
  formatCategory: (text: string) => string;
  capitalizeSentiment: (sentiment: string) => string;
}

export default function FeedbackModal({
  onClose,
  feedbackData,
  date,
  department,
  onOpinionClick,
  formatDate,
  formatCategory,
  capitalizeSentiment,
}: FeedbackModalProps) {
  return (
    <div className="FeedbackModal">
      <div className="FeedbackModal__overlay" onClick={onClose} />
      <div className="FeedbackModal__content">
        <div className="FeedbackModal__content__header">
          <span className="FeedbackModal__content__header__title">
            Opinion Details
          </span>
          <button
            className="FeedbackModal__content__header__close"
            onClick={onClose}
          >
            <XIcon size={24} />
          </button>
        </div>
        <div className="FeedbackModal__content__body">
          {feedbackData ? (
            <div className="FeedbackModal__content__body__container">
              {/* Date */}
              <div className="modal-info-row">
                <span className="modal-info-row__label">Date</span>
                <span className="modal-info-row__value">
                  {formatDate(date)}
                </span>
              </div>

              {/* Department */}
              <div className="modal-info-row">
                <span className="modal-info-row__label">Department</span>
                <span className="modal-info-row__value">{department}</span>
              </div>

              {/* Full Feedback Card */}
              <div className="feedback-card">
                <div className="feedback-card__header">
                  Full Feedback Statement
                </div>
                <div className="feedback-card__text">
                  {feedbackData.feedback_text}
                </div>
              </div>

              {/* Opinions Grid */}
              <div className="opinions-section">
                <div className="opinions-section__header">
                  Related Opinions ({feedbackData.opinions.length})
                </div>
                <div className="opinions-grid opinions-grid--mobile">
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
            </div>
          ) : (
            <div className="FeedbackModal__content__body__text">
              No feedback data available
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
