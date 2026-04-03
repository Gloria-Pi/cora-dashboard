import type OverlayProps from "./Overlay.models";
import "./Overlay.scss";

export default function Overlay({ onClick }: OverlayProps) {
  return <div className="Overlay" onClick={onClick} />;
}
