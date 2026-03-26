import StatementCard from "../Cards/StatementCard/StatementCard";
import Lnk from "../Links/Lnk";

import type RecentFeedbacksProps from "./RecentFeedbacks.models";
import "./RecentFeedbacks.scss";

export default function RecentFeedbacks({
  data,
  maxItems = 5,
}: RecentFeedbacksProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Sort by date (most recent first) and limit to maxItems
  const recentFeedbacks = [...data]
    .sort(
      (a, b) =>
        new Date(b.submitted_at).getTime() - new Date(a.submitted_at).getTime(),
    )
    .slice(0, maxItems);

  return (
    <div className="RecentFeedbacks">
      <div className="RecentFeedbacks__header">
        <h2 className="RecentFeedbacks__header__title">Feedback Recenti</h2>
        <Lnk
          href="/opinions/#feedbacks-table"
          text="Vai alla tabella"
          size={18}
        />
      </div>
      <div className="RecentFeedbacks__list">
        {recentFeedbacks.map((feedback) => (
          <StatementCard
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
