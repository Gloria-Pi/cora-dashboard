import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import Header from "../../../components/Header/Header";
import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import RecentFeedbacks from "../../../components/RecentStatements/RecentFeedbacks";
import type { IFeedback } from "../../../constants/global.constants";
import { data1, data2, overviewCardsData } from "../../../mock/dummyData";
import { DEFAULT_FEEDBACK_DATA } from "../../../mock/feedbacks";

import "./Overview.scss";
import CardsGrid from "../../../components/Cards/CardsGrid/CardsGrid";

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

        <CardsGrid
          cards={overviewCardsData}
          gridClass="Overview__grid__cards"
        />

        <div className="Overview__grid__charts">
          <ChartCard title="Sentiment Score Trend" minHeight={420}>
            <CustomLineChart data={data1} />
          </ChartCard>

          <ChartCard title="Sentiment Distribution" minHeight={420}>
            <CustomPieChart data={data2} outerRadius="85%" innerRadius="60%" />
          </ChartCard>
        </div>
        <div className="Overview__grid__feedbacks">
          <RecentFeedbacks data={DEFAULT_FEEDBACK_DATA as IFeedback[]} />
        </div>
      </div>
    </div>
  );
}
