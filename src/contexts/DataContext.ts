// https://jsonblob.com/019d53d0-7665-76ce-9232-3ecfcd06d01f
//memoize call with usecallback
//memoize resulting obj with useMemo
// add usestate for loading and error values, and add those values to the memoized object passed to the provider
// add try/catch/finally inside refreshProfile. Set loading true and error null at the top, in the catch block set error, in finally set loading false
import { createContext, useContext, useEffect, useState } from "react";

import type { IFeedback } from "../constants/global.constants";

const DataContext = createContext<IFeedback[] | undefined>(undefined);

export function useData() {
  const context = useContext(DataContext);

  const [data, setData] = useState<IFeedback[] | undefined>(undefined);

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(
        "https://jsonblob.com/019d53d0-7665-76ce-9232-3ecfcd06d01f",
      );
      const json = await res.json();
      setData(json);
    }
    fetchAPI();
  }, []);

  if (!context) throw new Error("DataContext not provided");

  return context;
}

export default DataContext;
