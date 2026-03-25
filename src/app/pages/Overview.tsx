import { ChatCircleIcon } from "@phosphor-icons/react";

import Card from "../../components/Cards/Card/Card";
import ChartCard from "../../components/Cards/ChartCard/ChartCard";
import Header from "../../components/Header/Header";
import CustomLineChart from "../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import CustomPieChart from "../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import RecentStatements from "../../components/RecentStatements";
import type { IFeedback } from "../../components/Tables/FeedbackTable/FeedbackTable.models";
import { data1, data2 } from "../../mock/dummyData";
import { DEFAULT_FEEDBACK_DATA } from "../../mock/feedbacks";

import "./Overview.scss";

export default function Overview() {
  return (
    <div className="Overview">
      <div className="Overview__grid">
        <div className="Overview__grid__header">
          <Header
            title="Dashboard Overview"
            summary="Understand office sentiment at a glance"
          />
        </div>
        <div className="Overview__grid__filters">FILTRI</div>

        <div className="Overview__grid__cards">
          <Card
            title="Feedback Totali"
            icon={ChatCircleIcon}
            value="28"
            description="Collected this week"
          />
          <Card
            title="Feedback Totali"
            icon={ChatCircleIcon}
            value="28"
            description="Collected this week"
          />
          <Card
            title="Feedback Totali"
            icon={ChatCircleIcon}
            value="28"
            description="Collected this week"
          />
          <Card
            title="Feedback Totali"
            icon={ChatCircleIcon}
            value="28"
            description="Collected this week"
          />
        </div>
        <div className="Overview__grid__charts">
          <ChartCard title="Sentiment Score Trend" minHeight={420}>
            <CustomLineChart data={data1} />
          </ChartCard>

          <ChartCard title="Sentiment Distribution" minHeight={420}>
            <CustomPieChart data={data2} outerRadius="85%" innerRadius="60%" />
          </ChartCard>
        </div>
        <div className="Overview__grid__recent">
          <RecentStatements data={DEFAULT_FEEDBACK_DATA as IFeedback[]} />
        </div>
      </div>
    </div>
  );
}
