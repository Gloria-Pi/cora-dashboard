import { useEffect, useState } from "react";

import type { BreakpointsType } from "../constants/global.constants";

export default function useIsAboveBreakpoint(breakpoint: BreakpointsType) {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(
    window.innerWidth >= breakpoint,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isAboveBreakpoint;
}
