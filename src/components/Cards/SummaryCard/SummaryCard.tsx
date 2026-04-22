import classNames from "classnames";

import type { SummaryCardProps } from "./SummaryCard.models";
import "./SummaryCard.scss";

export default function SummaryCard({
  type,
  icon,
  children,
}: SummaryCardProps) {
  return (
    <div
      className={classNames("SummaryCard", {
        ["SummaryCard--positive"]: type === "positive",
        ["SummaryCard--negative"]: type === "negative",
      })}
    >
      <div className="SummaryCard__header">
        <div
          className={classNames("SummaryCard__header__icon", {
            ["SummaryCard__header__icon--positive"]: type === "positive",
            ["SummaryCard__header__icon--negative"]: type === "negative",
          })}
        >
          {icon}
        </div>

        <h3 className="SummaryCard__header__title">
          {type === "positive" ? "Positive Trends" : "Emerging Issues"}
        </h3>
      </div>

      <div className="SummaryCard__content">{children}</div>
    </div>
  );
}

/*
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

import type { IFeedback } from "../../../constants/global.constants";

interface SummaryCardProps {
  data: IFeedback[];
}

const SummaryCard = ({ data }: SummaryCardProps) => {
  const [summary, setSummary] = useState("");
  //   const [loading, setLoading] = useState(true);
  // Dentro il tuo componente React

  useEffect(() => {
    // 1. Non fare nulla se i dati non sono ancora pronti
    if (!data || data.length === 0) return;

    // 2. Non fare nulla se abbiamo già un riassunto (evita il loop)
    if (summary !== "") return;

    const getAiSummary = async () => {
      // Se il context sta ancora caricando o non ha dati, aspettiamo
      // if (contextLoading || !data) return;

      try {
        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Passiamo i dati già presenti nel frontend!
          body: JSON.stringify(data),
        });

        const result = await response.json();
        setSummary(result.summary);
      } catch (err) {
        console.error("AI Fetch error:", err);
      }
    };

    getAiSummary();
  }, [summary, data]);

  return (
    <div
      className="summary-card"
      style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h3>Riassunto AI dei Feedback</h3>
      <div>
        <ReactMarkdown
          components={{
            h3: ({ children }) => (
              <h3 className="text-2xl font-bold mt-4">{children}</h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-xl font-bold mt-4">{children}</h4>
            ),
            li: ({ children }) => (
              <li className="ml-4 mt-2 list-disc">{children}</li>
            ),
          }}
        >
          {summary}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default SummaryCard;

*/
