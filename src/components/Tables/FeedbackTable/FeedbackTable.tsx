import { ArrowRightIcon, CaretDownIcon, XIcon } from "@phosphor-icons/react";

import { useEffect, useRef, useState } from "react";

import classNames from "classnames";

import type {
  FeedbackTableProps,
  IFeedback,
  IFeedbackTableRow,
} from "./FeedbackTable.models";
import "./FeedbackTable.scss";

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

  const closeModal = () => {
    setModalRow(null);
  };

  // Get the full feedback data for a given feedback ID
  const getFeedbackData = (feedbackId: number): IFeedback | undefined => {
    return data.find((f) => f.feedback_id === feedbackId);
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
                          <CaretDownIcon size={20} />
                        </div>
                      </td>
                    </tr>

                    {!isMobile &&
                      isExpanded &&
                      isFirstOpinionOfFeedback &&
                      feedbackData && (
                        <tr className="table__expanded-content">
                          <td colSpan={8}>
                            <div className="table__expanded-content__container">
                              {/* Full Feedback Card */}
                              <div className="feedback-card">
                                <div className="feedback-card__header">
                                  Full Feedback Statement
                                </div>
                                <div className="feedback-card__text">
                                  {feedbackData.feedback_text}
                                </div>
                              </div>

                              {/* Opinions Grid */}
                              {feedbackData.opinions.length > 1 && (
                                <div className="opinions-section">
                                  <div className="opinions-section__header">
                                    Related Opinions (
                                    {feedbackData.opinions.length})
                                  </div>
                                  <div className="opinions-grid">
                                    {feedbackData.opinions.map((opinion) => (
                                      <div
                                        key={opinion.opinion_id}
                                        className="opinion-card"
                                        onClick={() =>
                                          handleOpinionCardClick(
                                            opinion.opinion_id,
                                          )
                                        }
                                      >
                                        <div className="opinion-card__header">
                                          <span
                                            className={classNames(
                                              "SentimentPill",
                                              {
                                                ["SentimentPill--positive"]:
                                                  opinion.sentiment ===
                                                  "positive",
                                                ["SentimentPill--negative"]:
                                                  opinion.sentiment ===
                                                  "negative",
                                                ["SentimentPill--neutral"]:
                                                  opinion.sentiment ===
                                                  "neutral",
                                              },
                                            )}
                                          >
                                            <span className="SentimentPill__dot">
                                              •
                                            </span>
                                            {capitalizeSentiment(
                                              opinion.sentiment,
                                            )}
                                          </span>
                                          <span className="opinion-card__score">
                                            {opinion.sentiment_score.toFixed(2)}
                                          </span>
                                        </div>
                                        <div className="opinion-card__excerpt">
                                          "{opinion.feedback_excerpt}"
                                        </div>
                                        <div className="opinion-card__meta">
                                          <span className="opinion-card__category">
                                            {formatCategory(opinion.category)}
                                          </span>
                                          <span className="opinion-card__separator">
                                            •
                                          </span>
                                          <span className="opinion-card__subcategory">
                                            {formatCategory(
                                              opinion.subcategory,
                                            )}
                                          </span>
                                        </div>
                                        <div className="opinion-card__action">
                                          <span>View in table</span>
                                          <ArrowRightIcon size={16} />
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                  </>
                );
              })}
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
                Feedback Details
              </span>
              <button
                className="FeedbackModal__content__header__close"
                onClick={closeModal}
              >
                <XIcon size={24} />
              </button>
            </div>
            <div className="FeedbackModal__content__body">
              {(() => {
                const feedbackData = getFeedbackData(modalRow.feedbackId);
                return feedbackData ? (
                  <>
                    {/* Full Feedback Card */}
                    <div className="feedback-card">
                      <div className="feedback-card__header">
                        Full Feedback Statement
                      </div>
                      <div className="feedback-card__text">
                        {feedbackData.feedback_text}
                      </div>
                    </div>

                    {/* Opinions Grid */}
                    {feedbackData.opinions.length > 1 && (
                      <div className="opinions-section">
                        <div className="opinions-section__header">
                          Related Opinions ({feedbackData.opinions.length})
                        </div>
                        <div className="opinions-grid opinions-grid--mobile">
                          {feedbackData.opinions.map((opinion) => (
                            <div
                              key={opinion.opinion_id}
                              className="opinion-card"
                            >
                              <div className="opinion-card__header">
                                <span
                                  className={classNames("SentimentPill", {
                                    ["SentimentPill--positive"]:
                                      opinion.sentiment === "positive",
                                    ["SentimentPill--negative"]:
                                      opinion.sentiment === "negative",
                                    ["SentimentPill--neutral"]:
                                      opinion.sentiment === "neutral",
                                  })}
                                >
                                  <span className="SentimentPill__dot">•</span>
                                  {capitalizeSentiment(opinion.sentiment)}
                                </span>
                                <span className="opinion-card__score">
                                  {opinion.sentiment_score.toFixed(2)}
                                </span>
                              </div>
                              <div className="opinion-card__excerpt">
                                "{opinion.feedback_excerpt}"
                              </div>
                              <div className="opinion-card__meta">
                                <span className="opinion-card__category">
                                  {formatCategory(opinion.category)}
                                </span>
                                <span className="opinion-card__separator">
                                  •
                                </span>
                                <span className="opinion-card__subcategory">
                                  {formatCategory(opinion.subcategory)}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="FeedbackModal__content__body__text">
                    {modalRow.fullStatement}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
