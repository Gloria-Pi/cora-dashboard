// import { useData } from "../../hooks/useData";
import { ThumbsDownIcon, ThumbsUpIcon } from "@phosphor-icons/react";

import SummaryCard from "../../../components/Cards/SummaryCard/SummaryCard";
import Header from "../../../components/Header/Header";
import type { IPolarity } from "../../../constants/global.constants";

import "./Trends.scss";

// import { useData } from "../../hooks/useData";

export default function Trends() {
  // const { data } = useData();
  // console.log(data);

  // const SchroedingerData = data.data
  //   ? JSON.stringify(data.data)
  //   : `${data.error}`;

  interface IMockData {
    type: IPolarity;
    points: string[];
  }

  const mockData: IMockData[] = [
    {
      type: "positive",
      // title: "Positive Trends",
      points: [
        "Users appreciate the clean and intuitive interface",
        "Fast loading times improve overall user satisfaction",
        "Search functionality is accurate and reliable",
        "Onboarding flow is smooth and easy to follow",
      ],
    },
    {
      type: "negative",
      // title: "Emerging Issues",
      points: [
        "Mobile app crashes reported on older devices",
        "Notifications are sometimes delayed or missing",
        "Customer support response time is inconsistent",
        "Some users find pricing unclear",
      ],
    },
  ];

  function getSummaryIcon(type: IPolarity) {
    switch (type) {
      case "positive":
        return <ThumbsUpIcon weight="fill" size={28} />;

      case "negative":
        return <ThumbsDownIcon weight="fill" size={28} />;

      default:
        return null;
    }
  }

  return (
    <>
      <div className="Trends">
        <Header title="Trends Page" summary="AI Insights I guess" />

        {mockData?.length > 0 && (
          <div className="Trends__cards">
            {mockData.map((d, i) => (
              <SummaryCard key={i} type={d.type} icon={getSummaryIcon(d.type)}>
                <ul>
                  {d.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </SummaryCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
