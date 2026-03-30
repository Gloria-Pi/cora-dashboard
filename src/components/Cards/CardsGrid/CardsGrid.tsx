import type CardsGridProps from "./CardsGrid.models";
import "./CardsGrid.scss";
import Card from "../Card/Card";
import classNames from "classnames";

export default function CardsGrid({ cards, gridClass }: CardsGridProps) {
  return (
    <div className={classNames("CardsGrid", gridClass)}>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          icon={card.icon}
          value={card.value}
          description={card.description}
        />
      ))}
    </div>
  );
}
