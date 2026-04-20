import { ArrowRightIcon } from "@phosphor-icons/react";

import { formatDate } from "../../utilities/formatters.utils";
import FeedbackCard from "../Cards/FeedbackCard/FeedbackCard";
import Lnk from "../Links/Lnk";

import type RecentFeedbacksProps from "./RecentFeedbacks.models";
import "./RecentFeedbacks.scss";

export default function RecentFeedbacks({
  title,
  navText,
  data,
  maxItems = 5,
}: RecentFeedbacksProps) {
  const fetchedData = data.data;
  // if (!fetchedData) return `RecentFeedbacks: ${data.error}`;

  // Limit to maxItems
  const limitedFeedbacks = [...fetchedData].slice(0, maxItems);

  return (
    <div className="RecentFeedbacks">
      <div className="RecentFeedbacks__header">
        <h3 className="RecentFeedbacks__header__title">{title}</h3>
        <Lnk
          href="/opinions/#feedbacks-table"
          text={navText}
          icon={<ArrowRightIcon size={18} />}
        />
      </div>
      <div className="RecentFeedbacks__list">
        {limitedFeedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.feedback_id}
            sentiment={feedback.overall_sentiment}
            category={feedback.opinions[0]?.category || "general"}
            date={formatDate(feedback.submitted_at)}
            feedbackText={feedback.feedback_text}
          />
        ))}
      </div>
    </div>
  );
}
