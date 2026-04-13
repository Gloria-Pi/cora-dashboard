import { useMemo, useState } from "react";

import CardsGrid from "../../../components/Cards/CardsGrid/CardsGrid";
import FilterSelect from "../../../components/Filters/FilterSelect/FilterSelect";
import Header from "../../../components/Header/Header";
import FeedbackTable from "../../../components/Tables/FeedbackTable/FeedbackTable";
import {
  type IFeedback,
  type IPolarity,
  POLARITIES,
} from "../../../constants/global.constants";
import { useData } from "../../../hooks/useData";
import {
  DEPARTMENT_TYPE,
  type DepartmentType,
  FEEDBACK_CATEGORIES,
  type FeedbackCategory,
} from "../../../mock/feedbacks";

import "./Opinions.scss";

export default function Opinions() {
  const data = useData();

  const [selectedSentiment, setSelectedSentiment] = useState<IPolarity | "">(
    "",
  );

  const [selectedCategory, setSelectedCategory] = useState<
    FeedbackCategory | ""
  >("");

  const [selectedDepartment, setSelectedDepartment] = useState<
    DepartmentType | ""
  >("");

  function filterBySelection(
    data: IFeedback[],
    sentiment: IPolarity | "",
    category: FeedbackCategory | "",
    department: DepartmentType | "",
  ): IFeedback[] {
    if (sentiment === "" && category === "" && department === "") return data;

    return data
      .filter((feedback) => {
        const departmentMatch =
          department === "" || feedback.department === department;
        return departmentMatch;
      })
      .map((feedback) => {
        const filteredOpinions = feedback.opinions.filter((opinion) => {
          const sentimentMatch =
            sentiment === "" || opinion.sentiment === sentiment;

          const categoryMatch =
            category === "" || opinion.category === category;

          return sentimentMatch && categoryMatch;
        });
        return { ...feedback, opinions: filteredOpinions };
      });
  }

  const filteredData = useMemo(
    () =>
      filterBySelection(
        data.data,
        selectedSentiment,
        selectedCategory,
        selectedDepartment,
      ),
    [data.data, selectedSentiment, selectedCategory, selectedDepartment],
  );

  return (
    <div className="Opinions">
      <Header
        title="Feedback Opinions"
        summary="Detailed breakdown of all feedback opinions"
      />

      <CardsGrid cards={data.formatOpinionsCardsData(filteredData)} />

      <div className="Opinions__filters">
        <FilterSelect<IPolarity>
          name="sentiment"
          value={selectedSentiment}
          setValue={setSelectedSentiment}
          label="All Sentiments"
          options={[...POLARITIES]}
        />

        <FilterSelect<FeedbackCategory>
          name="category"
          value={selectedCategory}
          setValue={setSelectedCategory}
          label="All Categories"
          options={[...FEEDBACK_CATEGORIES]}
        />

        <FilterSelect<DepartmentType>
          name="departments"
          value={selectedDepartment}
          setValue={setSelectedDepartment}
          label="All Departments"
          options={[...DEPARTMENT_TYPE]}
        />
      </div>
      <div id="feedbacks-table">
        <FeedbackTable data={filteredData} error={data.error} />
      </div>
    </div>
  );
}
