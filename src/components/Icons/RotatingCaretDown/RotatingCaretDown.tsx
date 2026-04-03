import { CaretDownIcon } from "@phosphor-icons/react";

import classNames from "classnames";

import type RotatingCaretDownProps from "./RotatingCaretDown.models";
import "./RotatingCaretDown.scss";

export default function RotatingCaretDown({
  condition,
  size = 24,
  weight,
  parentClass,
  onClick,
}: RotatingCaretDownProps): React.ReactNode {
  return (
    <button
      className={classNames("Chevron", parentClass, {
        ["Chevron--rotated"]: condition,
      })}
      onClick={onClick}
    >
      <CaretDownIcon size={size} weight={weight} />
    </button>
  );
}
