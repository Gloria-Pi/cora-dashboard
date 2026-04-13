//memoize resulting obj with useMemo
//memoize call (es refresh fn) with usecallback
// add usestate for data, loading and error values, and add those values to the memoized object passed to the provider
// add try/catch/finally inside fn. Set loading true and error null at the top, in the catch block set error, in finally set loading false
import { createContext } from "react";

import type {
  ICardData,
  IFeedback,
  IRechartsData,
} from "../constants/global.constants";

export interface IDataContext {
  data: IFeedback[];
  error: Error | null;
  formatOverviewCardsData: () => ICardData[];
  formatOpinionsCardsData: (filteredOpinions: IFeedback[]) => ICardData[];
  formatLineChartData: () => IRechartsData[];
  formatPieChartData: () => IRechartsData[];
}

export interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext<IDataContext | null>(null);
