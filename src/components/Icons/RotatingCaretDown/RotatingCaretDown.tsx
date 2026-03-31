import { CaretDownIcon } from "@phosphor-icons/react";

import classNames from "classnames";

import type RotatingCaretDownProps from "./RotatingCaretDown.models";
import "./RotatingCaretDown.scss";

export default function RotatingCaretDown({
  condition,
  size = 24,
  weight,
  parentClass,
}: RotatingCaretDownProps): React.ReactNode {
  return (
    <div
      className={classNames("Chevron", parentClass, {
        ["Chevron--rotated"]: condition,
      })}
    >
      <CaretDownIcon size={size} weight={weight} />
    </div>
  );
}
