import { ArrowRightIcon } from "@phosphor-icons/react";

import {
  formatCategory,
  getSentimentIcon,
} from "../../../utilities/formatters.utils";
import Lnk from "../../Links/Lnk";
import SentimentPill from "../../SentimentPill/SentimentPill";

import type OpinionCardProps from "./OpinionCard.models";
import "./OpinionCard.scss";

export default function OpinionCard({ opinion, onClick }: OpinionCardProps) {
  const {
    opinion_id,
    sentiment,
    sentiment_score,
    feedback_excerpt,
    category,
    subcategory,
  } = opinion;

  return (
    <div className="OpinionCard" onClick={() => onClick(opinion_id)}>
      <div className="OpinionCard__header">
        <SentimentPill
          sentiment={sentiment}
          symbol={getSentimentIcon(sentiment, 24)}
        />
        <span className="OpinionCard__score">{sentiment_score.toFixed(2)}</span>
      </div>

      <div className="OpinionCard__excerpt">"{feedback_excerpt}"</div>

      <div className="OpinionCard__info">
        <span className="OpinionCard__category">
          {formatCategory(category)}
        </span>
        <span className="OpinionCard__separator">•</span>
        <span className="OpinionCard__subcategory">
          {formatCategory(subcategory)}
        </span>
      </div>

      <div className="OpinionCard__action">
        <Lnk
          href="#"
          text="View in table"
          icon={<ArrowRightIcon size={18} />}
        />
      </div>
    </div>
  );
}
