import { Link } from "react-router";

import type { LnkProps } from "./Lnk.models";
import "./Lnk.scss";

export default function Lnk({ text, href, icon: Icon }: LnkProps) {
  return (
    <Link to={href} className="Lnk">
      <p>{text}</p>
      {Icon}
    </Link>
  );
}
