// import {
//   SmileyIcon,
//   SmileyMehIcon,
//   SmileySadIcon,
// } from "@phosphor-icons/react";
import {
  CartesianGrid,
  type LabelProps,
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

  // DA SPOSTARE
  const CustomizedLabel = ({ x, y, stroke, value }: LabelProps) => {
    return (
      <text x={x} y={y} dy={18} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  };

  // DA SPOSTARE
  const RotatedAxisTick = ({
    x,
    y,
    payload,
  }: {
    x?: number | string;
    y?: number | string;
    payload?: { value: string };
  }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-40)"
        >
          {payload?.value}
        </text>
      </g>
    );
  };

  // const smileySet: ISentimentIconSet = {
  //   positive: <SmileyIcon size={20} color="#22c55e" weight="fill" />,
  //   neutral: <SmileyMehIcon size={20} color="#eab308" weight="fill" />,
  //   negative: <SmileySadIcon size={20} color="#ef4444" weight="fill" />,
  // };

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>

      <div className="chart-card">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 35, right: 25, bottom: 20, left: 0 }}
            accessibilityLayer={true}
          >
            <ReferenceLine stroke="grey" y={0} />
            <Line
              type="bump"
              dataKey="score"
              stroke="#8884d8"
              label={CustomizedLabel}
              dot={(props) => <CustomSentimentDot {...props} size={16} />}
              // dot={(props) => (
              //   <CustomSentimentDot {...props} icons={smileySet} />
              // )}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="date" height={60} tick={RotatedAxisTick} />
            <YAxis dataKey="score" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
