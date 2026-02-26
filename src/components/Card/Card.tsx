import { useState } from "react";

import classNames from "classnames";

import "./Card.css";
import type CardProps from "./Card.models";

export default function Card({
  title,
  icon: Icon,
  value,
  description,
}: CardProps) {
  const [isImportant, setIsImportant] = useState(true);

  return (
    <div className="Card">
      <h3 className="title">{title}</h3>

      {Icon && (
        <div className="icon">
          <Icon size={20} />
        </div>
      )}

      <p className="value">{value}</p>

      {description && (
        <p
          className={classNames("description", {
            ["description--important"]: isImportant,
          })}
        >
          {description}
        </p>
      )}
    </div>
  );
}
