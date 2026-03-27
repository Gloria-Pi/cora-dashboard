import classNames from "classnames";

import {
  capitalizeWord,
  formatCategory,
  getSentimentIcon,
} from "../../../utilities/formatters.utils";

import type { StatementCardProps } from "./StatementCard.models";
import "./StatementCard.scss";

export default function StatementCard({
  sentiment,
  category,
  date,
  feedbackText,
}: StatementCardProps) {
  return (
    <div className="StatementCard">
      <div
        className={classNames("StatementCard__icon", {
          ["StatementCard__icon--positive"]: sentiment === "positive",
          ["StatementCard__icon--negative"]: sentiment === "negative",
          ["StatementCard__icon--neutral"]: sentiment === "neutral",
        })}
      >
        {getSentimentIcon(sentiment)}
      </div>
      <div className="StatementCard__content">
        <div className="StatementCard__content__header">
          <span className="StatementCard__content__header__sentiment">
            {capitalizeWord(sentiment)}
          </span>
          <span className="StatementCard__content__header__separator">•</span>
          <span className="StatementCard__content__header__category">
            {formatCategory(category)}
          </span>
          <span className="StatementCard__content__header__separator">•</span>
          <span className="StatementCard__content__header__date">{date}</span>
        </div>
        <div className="StatementCard__content__text">{feedbackText}</div>
      </div>
    </div>
  );
}
