import classNames from "classnames";

import type { SummaryCardProps } from "./SummaryCard.models";
import "./SummaryCard.scss";

export default function SummaryCard({
  type = "neutral",
  title,
  icon,
  children,
}: SummaryCardProps) {
  return (
    <div
      className={classNames("SummaryCard", {
        ["SummaryCard--positive"]: type === "positive",
        ["SummaryCard--negative"]: type === "negative",
      })}
    >
      <div className="SummaryCard__header">
        <div
          className={classNames("SummaryCard__header__icon", {
            ["SummaryCard__header__icon--positive"]: type === "positive",
            ["SummaryCard__header__icon--negative"]: type === "negative",
          })}
        >
          {icon}
        </div>

        <h3 className="SummaryCard__header__title">{title}</h3>
      </div>

      <div className="SummaryCard__content">{children}</div>
    </div>
  );
}
