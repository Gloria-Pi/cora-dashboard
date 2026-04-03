import { useEffect, useState } from "react";

import type { BreakpointsType } from "../constants/global.constants";

export function useIsBelowBreakpoint(breakpoint: BreakpointsType) {
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(
    window.innerWidth < breakpoint,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
}
