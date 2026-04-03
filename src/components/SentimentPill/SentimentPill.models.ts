import type { IPolarity } from "../../constants/global.constants";

export default interface SentimentPillProps {
  sentiment: IPolarity;
  symbol?: React.ReactElement;
}
