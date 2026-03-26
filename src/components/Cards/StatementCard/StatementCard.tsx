import {
  SmileyIcon,
  SmileyMehIcon,
  SmileySadIcon,
} from "@phosphor-icons/react";

import classNames from "classnames";

import {
  capitalizeWord,
  formatCategory,
} from "../../../utilities/formatters.utils";

import type { StatementCardProps } from "./StatementCard.models";
import "./StatementCard.scss";

export default function StatementCard({
  sentiment,
  category,
  date,
  feedbackText,
}: StatementCardProps) {
  const getIcon = () => {
    switch (sentiment) {
      case "positive":
        return <SmileyIcon size={24} weight="regular" />;
      case "negative":
        return <SmileySadIcon size={24} weight="regular" />;
      case "neutral":
        return <SmileyMehIcon size={24} weight="regular" />;
    }
  };

  return (
    <div className="StatementCard">
      <div
        className={classNames("StatementCard__icon", {
          ["StatementCard__icon--positive"]: sentiment === "positive",
          ["StatementCard__icon--negative"]: sentiment === "negative",
          ["StatementCard__icon--neutral"]: sentiment === "neutral",
        })}
      >
        {getIcon()}
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
