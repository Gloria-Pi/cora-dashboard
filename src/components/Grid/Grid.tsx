// import classNames from "classnames";
import classNames from "classnames";

import type GridProps from "./Grid.models";
import "./Grid.scss";

export default function Grid({ children, wrapperClass, gridClass }: GridProps) {
  return (
    <div className={classNames("Grid", wrapperClass)}>
      <div className={classNames("Grid__grid", gridClass)}>{children}</div>
    </div>
  );
}
