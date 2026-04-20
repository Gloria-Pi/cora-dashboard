import { useState } from "react";

import type { IOpinionTableRow } from "../constants/global.constants";

export default function useExpandedOpinion() {
  const [expandedOpinion, setExpandedOpinion] = useState<number | null>(null);

  const handleRowClick = (row: IOpinionTableRow) => {
    setExpandedOpinion(
      expandedOpinion === row.opinionId ? null : row.opinionId,
    );
  };

  const handleOpinionCardClick = (
    opinionId: number,
    rowRefs: React.RefObject<{
      [key: number]: HTMLTableRowElement | null;
    }>,
  ) => {
    closeModal();

    const selectedRow = rowRefs.current[opinionId];
    if (selectedRow) {
      setExpandedOpinion(opinionId);
      selectedRow.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const closeModal = () => {
    setExpandedOpinion(null);
  };

  return {
    expandedOpinion,
    handleRowClick,
    handleOpinionCardClick,
    closeModal,
  };
}
