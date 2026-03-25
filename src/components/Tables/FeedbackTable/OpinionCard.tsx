import { ArrowRightIcon } from "@phosphor-icons/react";

import classNames from "classnames";

interface OpinionCardProps {
  opinion: {
    opinion_id: number;
    feedback_excerpt: string;
    category: string;
    subcategory: string;
    sentiment: "positive" | "negative" | "neutral";
    sentiment_score: number;
  };
  onClick: (opinionId: number) => void;
  formatCategory: (text: string) => string;
  capitalizeSentiment: (sentiment: string) => string;
  showAction?: boolean;
}

export default function OpinionCard({
  opinion,
  onClick,
  formatCategory,
  capitalizeSentiment,
  showAction = true,
}: OpinionCardProps) {
  return (
    <div className="opinion-card" onClick={() => onClick(opinion.opinion_id)}>
      <div className="opinion-card__header">
        <span
          className={classNames("SentimentPill", {
            ["SentimentPill--positive"]: opinion.sentiment === "positive",
            ["SentimentPill--negative"]: opinion.sentiment === "negative",
            ["SentimentPill--neutral"]: opinion.sentiment === "neutral",
          })}
        >
          <span className="SentimentPill__dot">•</span>
          {capitalizeSentiment(opinion.sentiment)}
        </span>
        <span className="opinion-card__score">
          {opinion.sentiment_score.toFixed(2)}
        </span>
      </div>
      <div className="opinion-card__excerpt">"{opinion.feedback_excerpt}"</div>
      <div className="opinion-card__meta">
        <span className="opinion-card__category">
          {formatCategory(opinion.category)}
        </span>
        <span className="opinion-card__separator">•</span>
        <span className="opinion-card__subcategory">
          {formatCategory(opinion.subcategory)}
        </span>
      </div>
      {showAction && (
        <div className="opinion-card__action">
          <span>View in table</span>
          <ArrowRightIcon size={16} />
        </div>
      )}
    </div>
  );
}
