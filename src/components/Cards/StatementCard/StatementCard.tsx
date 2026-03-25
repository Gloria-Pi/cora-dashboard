import {
  SmileyIcon,
  SmileyMehIcon,
  SmileySadIcon,
} from "@phosphor-icons/react";

import classNames from "classnames";

import "./StatementCard.scss";

interface StatementCardProps {
  sentiment: "positive" | "negative" | "neutral";
  category: string;
  date: string;
  feedbackText: string;
}

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

  const formatCategory = (text: string) => {
    const formatted = text
      .replace(/[_-]/g, " ")
      .replace(/([A-Z])/g, " $1")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
      .trim();

    return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
  };

  const capitalizeSentiment = (sentiment: string) => {
    return sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
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
            {capitalizeSentiment(sentiment)}
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
