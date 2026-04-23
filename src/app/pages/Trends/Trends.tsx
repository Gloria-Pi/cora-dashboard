import { ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react";

import { useEffect, useState } from "react";

import SummaryCard from "../../../components/Cards/SummaryCard/SummaryCard";
import Header from "../../../components/Header/Header";
import type { IPolarity } from "../../../constants/global.constants";
import { useData } from "../../../hooks/useData";

import "./Trends.scss";

// import { useData } from "../../hooks/useData";

export default function Trends() {
  const { data } = useData();
  interface ISummaryData {
    type: IPolarity;
    points: string[];
  }

  const [summary, setSummary] = useState<ISummaryData[] | "">("");

  useEffect(() => {
    // Return if data is not ready or is empty
    if (!data || data.length === 0) return;

    // Return if there is already a summary
    if (summary !== "") return;

    const getAiSummary = async () => {
      try {
        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
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

  function getSummaryIcon(type: IPolarity) {
    switch (type) {
      case "positive":
        return <ThumbsUpIcon weight="fill" size={28} />;

      case "negative":
        return <ThumbsDownIcon weight="fill" size={28} />;

      default:
        return null;
    }
  }

  return (
    <>
      <div className="Trends">
        <Header title="Trends Page" summary="AI Insights I guess" />

        {summary !== "" && summary?.length > 0 && (
          <div className="Trends__cards">
            {summary.map((s, i) => (
              <SummaryCard
                key={i}
                type={s.type}
                title={
                  s.type === "positive" ? "Positive Trends" : "Emerging Issues"
                }
                icon={getSummaryIcon(s.type)}
              >
                <ul>
                  {s.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </SummaryCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
