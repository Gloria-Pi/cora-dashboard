// import classNames from "classnames";
import type HeaderProps from "./Header.models";
import "./Header.scss";

export default function Header({ title, summary }: HeaderProps) {
  return (
    <header className="Header">
      <h1 className="Header__title">{title}</h1>
      {summary && <p className="Header__summary">{summary}</p>}
    </header>
  );
}
