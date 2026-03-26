import { ArrowRightIcon } from "@phosphor-icons/react";

import { Link } from "react-router";

import type { LnkProps } from "./Lnk.models";
import "./Lnk.scss";

export default function Lnk({ text, href, size }: LnkProps) {
  return (
    <Link to={href} className="Lnk">
      <span>{text}</span>
      <ArrowRightIcon size={size} />
    </Link>
  );
}
