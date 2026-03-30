import { createContext, useContext } from "react";

type CollapseContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

const CollapseContext = createContext<CollapseContextType | null>(null);

export function useCollapse() {
  const context = useContext(CollapseContext);

  if (!context) {
    throw new Error("useCollapse must be used within a CollapseProvider");
  }

  return context;
}

export default CollapseContext;
