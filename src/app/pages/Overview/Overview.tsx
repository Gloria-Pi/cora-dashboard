import CardsGrid from "../../../components/Cards/CardsGrid/CardsGrid";
import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import Header from "../../../components/Header/Header";
import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import RecentFeedbacks from "../../../components/RecentFeedbacks/RecentFeedbacks";
import { useData } from "../../../hooks/useData";

import "./Overview.scss";

export default function Overview() {
  const data = useData();

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
          cards={data.formatOverviewCardsData()}
          gridClass="Overview__grid__cards"
        />

        <div className="Overview__grid__charts">
          <ChartCard title="Sentiment Score Trend" height={400}>
            <CustomLineChart data={data.formatLineChartData()} />
          </ChartCard>

          <ChartCard title="Sentiment Distribution" height={400}>
            <CustomPieChart
              data={data.formatPieChartData()}
              outerRadius="85%"
              innerRadius="60%"
            />
          </ChartCard>
        </div>

        <div className="Overview__grid__feedbacks">
          <RecentFeedbacks
            data={data}
            title="Feedback Recenti"
            navText="Vai alla tabella"
          />
        </div>
      </div>
    </div>
  );
}
