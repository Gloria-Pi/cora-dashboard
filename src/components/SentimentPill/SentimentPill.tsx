import classNames from "classnames";

import { BREAKPOINTS } from "../../constants/global.constants";
import { useIsBelowBreakpoint } from "../../hooks/useIsBelowBreakpoint";
import { capitalizeWord } from "../../utilities/formatters.utils";

import type SentimentPillProps from "./SentimentPill.models";
import "./SentimentPill.scss";

export default function SentimentPill({
  sentiment,
  symbol,
}: SentimentPillProps) {
  const isBelowLg = useIsBelowBreakpoint(BREAKPOINTS.lg);
  return (
    <div
      className={classNames("SentimentPill", `SentimentPill--${sentiment}`, {
        "SentimentPill--mobile": isBelowLg,
      })}
    >
      {isBelowLg && <span className="SentimentPill__symbol">{symbol}</span>}
      {!isBelowLg && (
        <p className="SentimentPill__label">{capitalizeWord(sentiment)}</p>
      )}
    </div>
  );
}
