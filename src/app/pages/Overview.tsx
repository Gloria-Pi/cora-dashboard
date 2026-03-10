import { ChatCircleIcon } from "@phosphor-icons/react";

import Card from "../../components/Cards/Card/Card";
import Header from "../../components/Header/Header";

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
          <p>hello</p>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
