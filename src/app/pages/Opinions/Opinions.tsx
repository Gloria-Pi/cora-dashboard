import Header from "../../../components/Header/Header";
import FeedbackTable from "../../../components/Tables/FeedbackTable";
import type { IFeedback } from "../../../constants/global.constants";
import { DEFAULT_FEEDBACK_DATA } from "../../../mock/feedbacks";

import "./Opinions.scss";
import CardsGrid from "../../../components/Cards/CardsGrid/CardsGrid";
import { overviewCardsData } from "../../../mock/dummyData";

export default function Opinions() {
  return (
    <div className="Opinions">
      <Header
        title="Feedback Opinions"
        summary="Detailed breakdown of all feedback opinions"
      />

      <CardsGrid cards={overviewCardsData} />

      <div id="feedbacks-table">
        <FeedbackTable data={DEFAULT_FEEDBACK_DATA as IFeedback[]} />
      </div>
    </div>
  );
}
