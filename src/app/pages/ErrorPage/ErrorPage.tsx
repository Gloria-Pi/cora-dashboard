import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import type { IRechartsData } from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart.models";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const data: IRechartsData[] = [
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

  const data1 = [
    { name: "Group B", value: 300, fill: "var(--color-positive-trend)" },
    { name: "Group C", value: 300, fill: "var(--color-neutral-trend)" },
    { name: "Group D", value: 200, fill: "var(--color-negative-trend)" },
  ];

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>
      <ChartCard title="Sentiment Score Trend" minHeight={420}>
        <CustomLineChart data={data} />
      </ChartCard>
      <ChartCard title="Sentiment Distribution" minHeight={320}>
        <CustomPieChart data={data1} outerRadius="85%" innerRadius="60%" />
      </ChartCard>
    </div>
  );
}
