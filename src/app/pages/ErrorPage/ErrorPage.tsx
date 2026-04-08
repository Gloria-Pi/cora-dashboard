// import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
// import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
// import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
// import CustomRadarChart from "../../../components/MiscRecharts/CustomRadarChart/CustomRadarChart";
// import { data1, data2 } from "../../../mock/dummyData";
// import { DEFAULT_FEEDBACK_DATA } from "../../../mock/feedbacks";
// import { buildRadarData } from "../../../utilities/buildRadarData";
import { useData } from "../../../hooks/useData";

import "./ErrorPage.scss";

export default function ErrorPage() {
  // const radarData = buildRadarData(DEFAULT_FEEDBACK_DATA);
  const data = useData();

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>

      {data && data.error && <span>{`${data.error}`}</span>}
      {/* <ChartCard title="Sentiment Score Trend" height={420}>
        <CustomLineChart data={data1} />
      </ChartCard>

      <ChartCard title="Sentiment Distribution" height={420}>
        <CustomPieChart data={data2} outerRadius="85%" innerRadius="60%" />
      </ChartCard>

      <ChartCard title="Topic Performance Overview" height={420}>
        <CustomRadarChart data={radarData} />
      </ChartCard> */}
    </div>
  );
}
