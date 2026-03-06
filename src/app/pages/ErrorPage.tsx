import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import CustomSentimentDot from "../../components/Icons/CustomSentimentDot/CustomSentimentDot";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const data = [
    { date: "2022-12-22", score: 0.1 },
    { date: "2022-12-23", score: 0.5 },
    { date: "2022-12-24", score: -0.3 },
    { date: "2022-12-27", score: 0 },
    { date: "2022-12-30", score: 0.2 },
  ];

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>

      <div className="chart-card">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 35, right: 25, bottom: 20, left: 0 }}
            // accessibilityLayer={true}
          >
            <ReferenceLine stroke="grey" y={0} />
            <Line
              type="bump"
              dataKey="score"
              stroke="#8884d8"
              // legendType="cross"
              dot={CustomSentimentDot}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} />
            <YAxis dataKey="score" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
