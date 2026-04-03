import type StatementCardProps from "./StatementCard.models";
import "./StatementCard.scss";

export default function StatementCard({
  label,
  statement,
}: StatementCardProps) {
  return (
    <div className="StatementCard">
      <div className="StatementCard__header">{label}</div>
      <div className="StatementCard__text">{statement}</div>
    </div>
  );
}
