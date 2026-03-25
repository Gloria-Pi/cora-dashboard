import { ArrowRightIcon } from "@phosphor-icons/react";

import { Link } from "react-router";

import StatementCard from "../Cards/StatementCard";
import type { IFeedback } from "../Tables/FeedbackTable/FeedbackTable.models";

import "./RecentStatements.scss";

interface RecentStatementsProps {
  data: IFeedback[];
  maxItems?: number;
}

export default function RecentStatements({
  data,
  maxItems = 5,
}: RecentStatementsProps) {
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
    <div className="RecentStatements">
      <div className="RecentStatements__header">
        <h2 className="RecentStatements__header__title">Recent Statements</h2>
        <Link to="/opinions" className="RecentStatements__header__link">
          <span>View all</span>
          <ArrowRightIcon size={16} />
        </Link>
      </div>
      <div className="RecentStatements__list">
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
