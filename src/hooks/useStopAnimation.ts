import { useEffect, useRef, useState } from "react";

import { BREAKPOINTS } from "../constants/global.constants";

import { useIsBelowBreakpoint } from "./useIsBelowBreakpoint";

export default function useStopAnimation(breakpoint = BREAKPOINTS.md) {
  const isMobile = useIsBelowBreakpoint(BREAKPOINTS.md);
  const [stopAnimation, setStopAnimation] = useState(!isMobile);
  const prevWidthRef = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      const prevWidth = prevWidthRef.current;

      // Checks if user resized from desktop to mobile
      if (prevWidth > breakpoint && currentWidth <= breakpoint) {
        setStopAnimation(false);
      }
      // Checks if user resized from mobile to desktop
      else if (prevWidth <= breakpoint && currentWidth > breakpoint) {
        setStopAnimation(true);
      }
      prevWidthRef.current = currentWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return stopAnimation;
}
