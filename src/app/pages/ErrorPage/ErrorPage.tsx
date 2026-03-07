import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import type { IRechartsData } from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart.models";

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

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>
      <CustomLineChart data={data} />

      {/* 
      <div className="chart-card">
        <h2>Sentiment Distribution</h2>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius="80%"
          innerRadius="60%"
          isAnimationActive={false}
        />
      </div> */}
    </div>
  );
}
