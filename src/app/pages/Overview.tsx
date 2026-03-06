import { ChatCircleIcon } from "@phosphor-icons/react";

import Card from "../../components/Card/Card";

export default function Overview() {
  return (
    <div className="Overview">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p>Understand office sentiment at a glance</p>
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
  );
}
