import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import CustomRadarChart from "../../../components/MiscRecharts/CustomRadarChart/CustomRadarChart";
import { data, data1 } from "../../../mock/dummyData";
import { DEFAULT_FEEDBACK_DATA } from "../../../mock/feedbacks";
import { buildRadarData } from "../../../utilities/buildRadarData";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const radarData = buildRadarData(DEFAULT_FEEDBACK_DATA);

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>
      <ChartCard title="Sentiment Score Trend" minHeight={420}>
        <CustomLineChart data={data} />
      </ChartCard>

      <ChartCard title="Sentiment Distribution" minHeight={420}>
        <CustomPieChart data={data1} outerRadius="85%" innerRadius="60%" />
      </ChartCard>

      <ChartCard title="Topic Performance Overview" minHeight={420}>
        <CustomRadarChart data={radarData} />
      </ChartCard>
    </div>
  );
}
