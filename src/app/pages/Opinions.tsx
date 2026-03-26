import {
  ChatCircleDotsIcon,
  SmileyIcon,
  TrendUpIcon,
  UsersIcon,
} from "@phosphor-icons/react";

import Card from "../../components/Cards/Card/Card";
import Header from "../../components/Header/Header";
import FeedbackTable from "../../components/Tables/FeedbackTable";
import type { IFeedback } from "../../components/Tables/FeedbackTable/FeedbackTable.models";
import { DEFAULT_FEEDBACK_DATA } from "../../mock/feedbacks";

import "./Opinions.scss";

export default function Opinions() {
  return (
    <div className="Opinions">
      <div className="Opinions__container">
        <div className="Opinions__container__header">
          <Header
            title="Feedback Opinions"
            summary="Detailed breakdown of all feedback opinions"
          />
        </div>

        <div className="Opinions__container__cards">
          <Card
            title="Total Opinions"
            icon={ChatCircleDotsIcon}
            value="156"
            description="Extracted from feedback"
          />
          <Card
            title="Positive Sentiment"
            icon={SmileyIcon}
            value="89"
            description="57% of all opinions"
          />
          <Card
            title="Average Score"
            icon={TrendUpIcon}
            value="0.72"
            description="Sentiment score"
          />
          <Card
            title="Departments"
            icon={UsersIcon}
            value="8"
            description="Represented"
          />
        </div>
        <div id="feedbacks-table">
          <FeedbackTable data={DEFAULT_FEEDBACK_DATA as IFeedback[]} />
        </div>
      </div>
    </div>
  );
}
