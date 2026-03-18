import { CaretDownIcon, XIcon } from "@phosphor-icons/react";

import { useEffect, useState } from "react";

import classNames from "classnames";

import type {
  FeedbackTableProps,
  IFeedbackTableRow,
} from "./FeedbackTable.models";
import "./FeedbackTable.scss";

export default function FeedbackTable({ data }: FeedbackTableProps) {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [modalRow, setModalRow] = useState<IFeedbackTableRow | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Flatten data structure: each opinion becomes a row
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
      setExpandedRow(expandedRow === row.opinionId ? null : row.opinionId);
    }
  };

  const closeModal = () => {
    setModalRow(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatText = (text: string, maxLength: number = 80) => {
    if (text.length <= maxLength) return `"${text}"`;
    return `"${text.substring(0, maxLength)}..."`;
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
              {rows.map((row) => (
                <>
                  <tr
                    key={row.opinionId}
                    className={classNames("table__row", {
                      ["table__row--expanded"]: expandedRow === row.opinionId,
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
                          ["table__row__chevron--expanded"]:
                            expandedRow === row.opinionId,
                        })}
                      >
                        <CaretDownIcon size={20} />
                      </div>
                    </td>
                  </tr>

                  {!isMobile && expandedRow === row.opinionId && (
                    <tr className="table__expanded-content">
                      <td colSpan={8}>
                        <div className="table__expanded-content__label">
                          Full Statement
                        </div>
                        <div className="table__expanded-content__text">
                          {row.fullStatement}
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalRow && isMobile && (
        <div className="FeedbackModal">
          <div className="FeedbackModal__overlay" onClick={closeModal} />
          <div className="FeedbackModal__content">
            <div className="FeedbackModal__content__header">
              <span className="FeedbackModal__content__header__title">
                Full Statement
              </span>
              <button
                className="FeedbackModal__content__header__close"
                onClick={closeModal}
              >
                <XIcon size={24} />
              </button>
            </div>
            <div className="FeedbackModal__content__body">
              <div className="FeedbackModal__content__body__text">
                {modalRow.fullStatement}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
