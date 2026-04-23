import {
  BuildingIcon,
  ForkKnifeIcon,
  MonitorIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  ToiletIcon,
} from "@phosphor-icons/react";
import { BusIcon } from "@phosphor-icons/react/dist/ssr";

import { useEffect, useState } from "react";

import SummaryCard from "../../../components/Cards/SummaryCard/SummaryCard";
import Header from "../../../components/Header/Header";
import type { IPolarity } from "../../../constants/global.constants";
import { useData } from "../../../hooks/useData";
import type { FeedbackCategory } from "../../../mock/feedbacks";

import "./Trends.scss";

export default function Trends() {
  const { data } = useData();
  interface ISummaryData {
    type: IPolarity;
    points: string[];
  }
  interface ICategoryTrendsData {
    type: FeedbackCategory;
    points: string[];
  }

  const [summary, setSummary] = useState<ISummaryData[] | null>(null);
  const [trends, setTrends] = useState<ICategoryTrendsData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // SUMMARIES
  useEffect(() => {
    // Return if data is not ready or is empty
    if (!data || data.length === 0) return;

    // Return if there is already a summary
    if (summary !== null) return;

    const getAiSummary = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "summaries",
            feedbacks: data,
          }),
        });

        const result = await response.json();

        if (!response.ok || result.error) {
          throw new Error(result.error || "Failed to fetch summary");
        }

        setSummary(result.output);
      } catch (err) {
        console.error("AI Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAiSummary();
  }, [summary, data]);

  // TRENDS
  useEffect(() => {
    // Return if data is not ready or is empty
    if (!data || data.length === 0) return;

    // Return if there is already a summary
    if (trends !== null) return;

    const getAiSummary = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/api/summarize", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode: "categories",
            feedbacks: data,
          }),
        });

        const result = await response.json();

        if (!response.ok || result.error) {
          throw new Error(result.error || "Failed to fetch categories data");
        }

        setTrends(result.output);
      } catch (err) {
        console.error("AI Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getAiSummary();
  }, [trends, data]);

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

  function getCategoryTrendsIcon(type: FeedbackCategory) {
    switch (type) {
      case "environment":
        return <BuildingIcon weight="fill" size={28} />;

      case "facilities":
        return <ToiletIcon weight="fill" size={28} />;

      case "equipment":
        return <MonitorIcon weight="fill" size={28} />;

      case "services":
        return <ForkKnifeIcon weight="fill" size={28} />;

      case "commuting":
        return <BusIcon weight="fill" size={28} />;

      default:
        return null;
    }
  }

  return (
    <>
      <div className="Trends">
        <Header title="Trends Page" summary="Trends of the office" />

        {loading && <p className="Trends__loading">Generating summary...</p>}

        {error && (
          <p className="Trends__error" style={{ color: "red" }}>
            {error}
          </p>
        )}

        {/* SUMMARY CARDS */}
        {!loading && !error && summary && summary?.length > 0 && (
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

        {/* CATEGORY TRENDS CARDS */}
        {!loading && !error && trends && trends?.length > 0 && (
          <div className="Trends__cards">
            {trends.map((s, i) => (
              <SummaryCard
                key={i}
                title={s.type}
                icon={getCategoryTrendsIcon(s.type)}
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
