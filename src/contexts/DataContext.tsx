import {
  ChatCircleIcon,
  SmileyIcon,
  SmileyMehIcon,
  TrendUpIcon,
} from "@phosphor-icons/react";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import type {
  ICardData,
  IFeedback,
  IRechartsData,
} from "../constants/global.constants";
import {
  getAvgScore,
  getNoFeedbacksBySentiment,
  getNoOpinionsBySentiment,
} from "../utilities/calculators.utils";

import { DataContext, type DataProviderProps } from "./DataContext.models";

// PROVIDER
export function DataProvider({ children }: DataProviderProps) {
  const [data, setData] = useState<IFeedback[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  // const value = useMemo(() => {
  //   return {
  //     data: data,
  //     error: error,
  //   };
  // }, [data, error]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://api.jsonblob.com/019daa70-1ede-7c38-846b-c3ac764c2095", //CORRECT
          // "https://api.jsonblob.com/019d66f7-0e83-7ddf-ac39-d0aa0addfd470", //WRONG
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch! Thrown error ${res.status}`);
        }

        const json = await res.json();
        const sortedData = [...json].sort(
          (a, b) =>
            new Date(b.submitted_at).getTime() -
            new Date(a.submitted_at).getTime(),
        );
        setData(sortedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Unknown error"));
        }
        navigate("/error");
      }
    }
    fetchData();
  }, [navigate]);

  const formatLineChartData = (): IRechartsData[] => {
    return data.reduce((acc: IRechartsData[], currFeedback: IFeedback) => {
      acc.push({
        date: currFeedback.submitted_at,
        score: currFeedback.overall_sentiment_score,
      });
      return acc;
    }, []);
  };

  const formatPieChartData = (): IRechartsData[] => {
    return [
      {
        name: "Positive",
        value: getNoFeedbacksBySentiment(data, "positive"),
        fill: "var(--color-positive-trend)",
      },
      {
        name: "Neutral",
        value: getNoFeedbacksBySentiment(data, "neutral"),
        fill: "var(--color-neutral-trend)",
      },
      {
        name: "Negative",
        value: getNoFeedbacksBySentiment(data, "negative"),
        fill: "var(--color-negative-trend)",
      },
    ];
  };

  const formatOverviewCardsData = (): ICardData[] => {
    return [
      {
        title: "Total Feedback",
        icon: ChatCircleIcon,
        value: data.length,
        description: "Collected this week",
      },
      {
        title: "Average Score",
        icon: TrendUpIcon,
        value: getAvgScore(data),
        description: "Sentiment score",
      },
      {
        title: "Positive Feedback",
        icon: SmileyIcon,
        value: getNoFeedbacksBySentiment(data, "positive"),
        description: "57% of all feedbacks",
      },
      {
        title: "Negative Feedback",
        icon: SmileyMehIcon,
        value: getNoFeedbacksBySentiment(data, "negative"),
        description: "33% of all feedbacks",
      },
    ];
  };

  const formatOpinionsCardsData = (
    filteredOpinions: IFeedback[],
  ): ICardData[] => {
    return [
      {
        title: "Total Opinions",
        icon: ChatCircleIcon,
        value: filteredOpinions.length,
        description: "Collected this week",
      },
      {
        title: "Average Score",
        icon: TrendUpIcon,
        value: getAvgScore(filteredOpinions),
        description: "Sentiment score",
      },
      {
        title: "Positive Opinions",
        icon: SmileyIcon,
        value: getNoOpinionsBySentiment(filteredOpinions, "positive"),
        description: "57% of all opinions",
      },
      {
        title: "Negative Opinions",
        icon: SmileyMehIcon,
        value: getNoOpinionsBySentiment(filteredOpinions, "negative"),
        description: "33% of all opinions",
      },
    ];
  };

  return (
    <DataContext.Provider
      value={{
        data,
        error,
        formatOverviewCardsData,
        formatOpinionsCardsData,
        formatLineChartData,
        formatPieChartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
