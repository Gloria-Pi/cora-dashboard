import { CaretDownIcon } from "@phosphor-icons/react";

import { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import ExpandedContent from "./ExpandedContent";
import FeedbackModal from "./FeedbackModal";
import type {
  FeedbackTableProps,
  IFeedbackTableRow,
} from "./FeedbackTable.models";
import "./FeedbackTable.scss";
import {
  capitalizeSentiment,
  formatCategory,
  formatDate,
  formatText,
} from "./formatters";

export default function FeedbackTable({ data }: FeedbackTableProps) {
  const [expandedFeedback, setExpandedFeedback] = useState<number | null>(null);
  const [modalRow, setModalRow] = useState<IFeedbackTableRow | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);
  const rowRefs = useRef<{ [key: number]: HTMLTableRowElement | null }>({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Flatten data structure -> each opinion becomes a row
  const rows: IFeedbackTableRow[] = data.flatMap((feedback) =>
    feedback.opinions.map((opinion) => ({
      opinionId: opinion.opinion_id,
      feedbackId: feedback.feedback_id,
      date: feedback.submitted_at,
      sentiment: opinion.sentiment,
      excerpt: opinion.feedback_excerpt,
      department: feedback.department,
      category: opinion.category,
      subcategory: opinion.subcategory,
      score: opinion.sentiment_score,
      fullStatement: feedback.feedback_text,
    })),
  );

  const handleRowClick = (row: IFeedbackTableRow) => {
    if (isMobile) {
      setModalRow(row);
    } else {
      setExpandedFeedback(
        expandedFeedback === row.feedbackId ? null : row.feedbackId,
      );
    }
  };

  const handleOpinionCardClick = (opinionId: number) => {
    const rowElement = rowRefs.current[opinionId];
    if (rowElement) {
      rowElement.scrollIntoView({ behavior: "smooth", block: "center" });
      rowElement.classList.add("table__row--highlighted");
      setTimeout(() => {
        rowElement.classList.remove("table__row--highlighted");
      }, 2000);
    }
  };

  const handleModalOpinionClick = (opinionId: number) => {
    closeModal();
    // Wait for modal to close before scrolling
    setTimeout(() => {
      handleOpinionCardClick(opinionId);
    }, 100);
  };

  const closeModal = () => {
    setModalRow(null);
  };

  // Get the full feedback data for a given feedback ID
  const getFeedbackData = (feedbackId: number) => {
    return data.find((f) => f.feedback_id === feedbackId);
  };

  return (
    <>
      <div className="FeedbackTable">
        <div className="FeedbackTable__wrapper">
          <table className="table">
            <thead className="table__header">
              <tr>
                <th>DATE</th>
                <th>SENTIMENT</th>
                <th>EXCERPT</th>
                <th className="hide-mobile">DEPARTMENT</th>
                <th className="hide-mobile">CATEGORY</th>
                <th className="hide-mobile">SUBCATEGORY</th>
                <th>SCORE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const feedbackData = getFeedbackData(row.feedbackId);
                const isExpanded = expandedFeedback === row.feedbackId;
                const isFirstOpinionOfFeedback =
                  index === 0 || rows[index - 1].feedbackId !== row.feedbackId;

                return (
                  <>
                    <tr
                      key={row.opinionId}
                      ref={(el) => {
                        rowRefs.current[row.opinionId] = el;
                      }}
                      className={classNames("table__row", {
                        ["table__row--expanded"]: isExpanded,
                        ["table__row--highlighted"]: false,
                      })}
                      onClick={() => handleRowClick(row)}
                    >
                      <td>{formatDate(row.date)}</td>
                      <td>
                        <span
                          className={classNames("SentimentPill", {
                            ["SentimentPill--positive"]:
                              row.sentiment === "positive",
                            ["SentimentPill--negative"]:
                              row.sentiment === "negative",
                            ["SentimentPill--neutral"]:
                              row.sentiment === "neutral",
                          })}
                        >
                          <span className="SentimentPill__dot">•</span>

                          {capitalizeSentiment(row.sentiment)}
                        </span>
                      </td>
                      <td>{formatText(row.excerpt)}</td>
                      <td className="hide-mobile">{row.department}</td>
                      <td className="hide-mobile">
                        {formatCategory(row.category)}
                      </td>
                      <td className="hide-mobile">
                        {formatCategory(row.subcategory)}
                      </td>
                      <td>{row.score.toFixed(2)}</td>
                      <td>
                        <div
                          className={classNames("table__row__chevron", {
                            ["table__row__chevron--expanded"]: isExpanded,
                          })}
                        >
                          <CaretDownIcon size={24} />
                        </div>
                      </td>
                    </tr>

                    {!isMobile &&
                      isExpanded &&
                      isFirstOpinionOfFeedback &&
                      feedbackData && (
                        <ExpandedContent
                          feedbackData={feedbackData}
                          onOpinionClick={handleOpinionCardClick}
                          formatCategory={formatCategory}
                          capitalizeSentiment={capitalizeSentiment}
                        />
                      )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <FeedbackModal
        isOpen={!!modalRow && isMobile}
        onClose={closeModal}
        feedbackData={
          modalRow ? getFeedbackData(modalRow.feedbackId) : undefined
        }
        date={modalRow?.date || ""}
        department={modalRow?.department || ""}
        onOpinionClick={handleModalOpinionClick}
        formatDate={formatDate}
        formatCategory={formatCategory}
        capitalizeSentiment={capitalizeSentiment}
      />
    </>
  );
}
