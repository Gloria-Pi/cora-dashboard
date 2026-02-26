import { ChatDotsIcon } from "@phosphor-icons/react";
import Card from "../../components/Card/Card";

export default function Overview() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p>Understand office sentiment at a glance</p>
      <Card
        title="Feedback Totali"
        icon={ChatDotsIcon}
        value="28"
        description="Collected this week"
      />
    </div>
  );
}
