import { useRef, useState } from "react";
import React from "react";

import classNames from "classnames";

import {
  BREAKPOINTS,
  type IOpinionTableRow,
} from "../../../constants/global.constants";
import { useIsBelowBreakpoint } from "../../../hooks/useIsBelowBreakpoint";
import {
  formatCategory,
  formatDate,
  formatText,
  getSentimentIcon,
} from "../../../utilities/formatters.utils";
import RotatingCaretDown from "../../Icons/RotatingCaretDown/RotatingCaretDown";
import SentimentPill from "../../SentimentPill/SentimentPill";

import ExpandedRow from "./ExpandedRow/ExpandedRow";
import type FeedbackTableProps from "./FeedbackTable.models";
import "./FeedbackTable.scss";

export default function FeedbackTable({ data }: FeedbackTableProps) {
  const [expandedOpinion, setExpandedOpinion] = useState<number | null>(null);
  const rowRefs = useRef<{ [key: number]: HTMLTableRowElement | null }>({});
  const isBelowLg = useIsBelowBreakpoint(BREAKPOINTS.lg);

  // Flatten data structure -> each opinion becomes a row
  const rows: IOpinionTableRow[] = data.flatMap((feedback) =>
    feedback.opinions.map((opinion) => ({
      opinionId: opinion.opinion_id,
      excerpt: opinion.feedback_excerpt,
      sentiment: opinion.sentiment,
      category: opinion.category,
      subcategory: opinion.subcategory,
      score: opinion.sentiment_score,

      feedbackId: feedback.feedback_id,
      date: feedback.submitted_at,
      department: feedback.department,
    })),
  );

  const handleRowClick = (row: IOpinionTableRow) => {
    setExpandedOpinion(
      expandedOpinion === row.opinionId ? null : row.opinionId,
    );
  };

  const handleOpinionCardClick = (opinionId: number) => {
    closeModal();

    const selectedRow = rowRefs.current[opinionId];
    if (selectedRow) {
      setExpandedOpinion(opinionId);
      selectedRow.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const closeModal = () => {
    setExpandedOpinion(null);
  };

  const getFeedbackData = (feedbackId: number) => {
    return data.find((f) => f.feedback_id === feedbackId);
  };

  return (
    <>
      <div className="FeedbackTable">
        <div className="FeedbackTable__wrapper">
          <table className="Table">
            <thead className="Table__header">
              <tr>
                <th>{!isBelowLg ? "SENTIMENT" : ""}</th>
                <th>DATE</th>
                <th>EXCERPT</th>
                {!isBelowLg && (
                  <>
                    <th>CATEGORY</th>
                    <th>SUBCATEGORY</th>
                    <th>DEPARTMENT</th>
                  </>
                )}
                <th>SCORE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const {
                  feedbackId,
                  opinionId,
                  date,
                  sentiment,
                  excerpt,
                  category,
                  subcategory,
                  department,
                  score,
                } = row;

                const currFeedbackData = getFeedbackData(feedbackId);
                const isExpanded = expandedOpinion === opinionId;

                return (
                  <React.Fragment key={opinionId}>
                    <tr
                      ref={(el) => {
                        rowRefs.current[opinionId] = el;
                      }}
                      className={classNames("Table__row", {
                        ["Table__row--expanded"]: isExpanded,
                      })}
                      onClick={() => handleRowClick(row)}
                    >
                      <td>
                        <SentimentPill
                          sentiment={sentiment}
                          symbol={getSentimentIcon(sentiment, 24)}
                        />
                      </td>
                      <td>{formatDate(date)}</td>
                      <td>
                        {isBelowLg
                          ? formatText(excerpt, 35)
                          : formatText(excerpt)}
                      </td>
                      {!isBelowLg && (
                        <>
                          <td>{formatCategory(category)}</td>
                          <td>{formatCategory(subcategory)}</td>
                          <td>{department}</td>
                        </>
                      )}
                      <td>{score.toFixed(2)}</td>
                      <td>
                        <RotatingCaretDown
                          parentClass="Table__row__chevron"
                          condition={isExpanded}
                          size={22}
                        />
                      </td>
                    </tr>

                    {isExpanded && currFeedbackData && (
                      <ExpandedRow
                        feedbackData={currFeedbackData}
                        onClose={closeModal}
                        onOpinionClick={handleOpinionCardClick}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
