import type { IOpinion } from "../../../constants/global.constants";

export default interface OpinionCardProps {
  opinion: IOpinion;
  onClick: (opinionId: number) => void;
}
