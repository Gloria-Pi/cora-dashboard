import { XIcon } from "@phosphor-icons/react";

import classNames from "classnames";

import { BREAKPOINTS } from "../../../../constants/global.constants";
import { useIsBelowBreakpoint } from "../../../../hooks/useIsBelowBreakpoint";
import { formatDate } from "../../../../utilities/formatters.utils";
import OpinionCard from "../../../Cards/OpinionCard/OpinionCard";
import StatementCard from "../../../Cards/StatementCard/StatementCard";
import Overlay from "../../../Overlay/Overlay";

import type ExpandedRowProps from "./ExpandedRow.models";
import "./ExpandedRow.scss";

export default function ExpandedRow({
  feedbackData,
  onOpinionClick,
  onClose,
}: ExpandedRowProps) {
  const isBelowLg = useIsBelowBreakpoint(BREAKPOINTS.lg);

  return (
    <tr
      className={classNames("ExpandedRow", {
        ["ExpandedRow--modal"]: isBelowLg,
      })}
    >
      <td colSpan={8}>
        {isBelowLg && <Overlay onClick={onClose} />}
        <div
          className={classNames("ExpandedRow__container", {
            ["ExpandedRow--modal__container"]: isBelowLg,
          })}
        >
          {isBelowLg && (
            <>
              <div className="ExpandedRow--modal__container__header">
                <span className="ExpandedRow--modal__container__header__title">
                  Opinion Details
                </span>
                <button
                  className="ExpandedRow--modal__container__header__close"
                  onClick={onClose}
                >
                  <XIcon size={24} />
                </button>
              </div>

              <div className="ExpandedRow--modal__container__row">
                <span className="ExpandedRow--modal__container__row__label">
                  Date
                </span>
                <span className="ExpandedRow--modal__container__row__value">
                  {formatDate(feedbackData.submitted_at)}
                </span>
              </div>

              <div className="ExpandedRow--modal__container__row">
                <span className="ExpandedRow--modal__container__row__label">
                  Department
                </span>
                <span className="ExpandedRow--modal__container__row__value">
                  {feedbackData.department}
                </span>
              </div>
            </>
          )}

          <StatementCard
            label={"Full Feedback Statement"}
            statement={feedbackData.feedback_text}
          />

          {feedbackData.opinions.length > 1 && (
            <div className="ExpandedRow__opinions">
              <div className="ExpandedRow__opinions__header">
                Related Opinions ({feedbackData.opinions.length})
              </div>
              <div className="ExpandedRow__opinions__grid">
                {feedbackData.opinions.map((opinion) => (
                  <OpinionCard
                    key={opinion.opinion_id}
                    opinion={opinion}
                    onClick={onOpinionClick}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}
