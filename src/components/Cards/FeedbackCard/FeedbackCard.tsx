import classNames from "classnames";

import {
  capitalizeWord,
  formatCategory,
  getSentimentIcon,
} from "../../../utilities/formatters.utils";

import type { FeedbackCardProps } from "./FeedbackCard.models";
import "./FeedbackCard.scss";

export default function FeedbackCard({
  sentiment,
  category,
  date,
  feedbackText,
}: FeedbackCardProps) {
  return (
    <div className="FeedbackCard">
      <div
        className={classNames("FeedbackCard__icon", {
          ["FeedbackCard__icon--positive"]: sentiment === "positive",
          ["FeedbackCard__icon--negative"]: sentiment === "negative",
          ["FeedbackCard__icon--neutral"]: sentiment === "neutral",
        })}
      >
        {getSentimentIcon(sentiment, 24)}
      </div>
      <div className="FeedbackCard__content">
        <div className="FeedbackCard__content__header">
          <span className="FeedbackCard__content__header__sentiment">
            {capitalizeWord(sentiment)}
          </span>
          <span className="FeedbackCard__content__header__separator">•</span>
          <span className="FeedbackCard__content__header__category">
            {formatCategory(category)}
          </span>
          <span className="FeedbackCard__content__header__separator">•</span>
          <span className="FeedbackCard__content__header__date">{date}</span>
        </div>
        <div className="FeedbackCard__content__text">{feedbackText}</div>
      </div>
    </div>
  );
}
