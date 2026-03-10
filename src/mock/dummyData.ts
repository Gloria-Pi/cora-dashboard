import type { IRechartsData } from "../constants/global.constants";

export const data1: IRechartsData[] = [
  { date: "2022-12-22", score: 0.1 },
  { date: "2022-12-23", score: 0.5 },
  { date: "2022-12-24", score: -0.3 },
  { date: "2022-12-27", score: 0 },
  { date: "2022-12-30", score: 0.2 },
  { date: "2023-1-22", score: 0.1 },
  { date: "2023-1-23", score: 0.5 },
  { date: "2023-1-24", score: -0.3 },
  { date: "2023-1-27", score: 0 },
  { date: "2023-1-30", score: 0.2 },
];

export const data2: IRechartsData[] = [
  { name: "Positive", value: 234, fill: "var(--color-positive-trend)" },
  { name: "Neutral", value: 311, fill: "var(--color-neutral-trend)" },
  { name: "Negative", value: 183, fill: "var(--color-negative-trend)" },
];
