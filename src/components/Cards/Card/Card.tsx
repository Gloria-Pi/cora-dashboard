// import { useState } from "react";
import classNames from "classnames";

import type CardProps from "./Card.models";
import "./Card.scss";

export default function Card({
  title,
  icon: Icon,
  value,
  description,
  // isPositive
}: CardProps) {
  // const [isPositive, setIsPositive] = useState(true);
  // const [isNegative, setIsNegative] = useState(false);

  return (
    <div className="Card">
      <div className="Card__header">
        <h3 className="Card__header__title">{title}</h3>

        {Icon && (
          <div className="Card__header__icon">
            <Icon />
          </div>
        )}
      </div>

      <p className="Card__value">{value}</p>

      {description && (
        <p
          className={classNames("Card__description", {
            // ["Card__description--positive"]: isPositive,
            // ["Card__description--negative"]: isNegative,
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
}
