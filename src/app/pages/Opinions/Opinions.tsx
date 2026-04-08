import { useEffect, useState } from "react";

import CardsGrid from "../../../components/Cards/CardsGrid/CardsGrid";
import Header from "../../../components/Header/Header";
import FeedbackTable from "../../../components/Tables/FeedbackTable/FeedbackTable";
import type { IFeedback, IPolarity } from "../../../constants/global.constants";
import { useData } from "../../../hooks/useData";
import type { DepartmentType, FeedbackCategory } from "../../../mock/feedbacks";

import "./Opinions.scss";

export default function Opinions() {
  const data = useData();
  const [selectedData, setSelectedData] = useState<IFeedback[]>([]);

  useEffect(() => {
    setSelectedData(data.data);
  }, [data]);

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

    const filteredFeedbacks = data.map((feedback) => {
      const filteredOpinions = feedback.opinions.filter((opinion) => {
        const sentimentMatch =
          sentiment === "" || opinion.sentiment === sentiment;

        const categoryMatch = category === "" || opinion.category === category;

        return sentimentMatch && categoryMatch;
      });
      return { ...feedback, opinions: filteredOpinions };
    });

    return filteredFeedbacks.filter((feedback) => {
      const departmentMatch =
        department === "" || feedback.department === department;
      return departmentMatch;
    });
  }

  useEffect(() => {
    setSelectedData(
      filterBySelection(
        data.data,
        selectedSentiment,
        selectedCategory,
        selectedDepartment,
      ),
    );
  }, [data, selectedSentiment, selectedCategory, selectedDepartment]);

  return (
    <div className="Opinions">
      <Header
        title="Feedback Opinions"
        summary="Detailed breakdown of all feedback opinions"
      />

      <CardsGrid cards={data.formatOpinionsCardsData(selectedData)} />

      <div>
        <select
          name="sentiment"
          aria-label="Filter by sentiment"
          onChange={(e) =>
            setSelectedSentiment(e.target.value as IPolarity | "")
          }
        >
          <option value="">All Sentiments</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>

        <select
          name="category"
          aria-label="Filter by category"
          onChange={(e) =>
            setSelectedCategory(e.target.value as FeedbackCategory | "")
          }
        >
          <option value="">All Categories</option>
          <option value="environment">Environment</option>
          <option value="equipment">Equipment</option>
          <option value="facilities">Facilities</option>
          <option value="services">Services</option>
          <option value="commuting">Commuting</option>
        </select>

        <select
          name="departments"
          aria-label="Filter by department"
          onChange={(e) =>
            setSelectedDepartment(e.target.value as DepartmentType | "")
          }
        >
          <option value="">All Departments</option>
          <option value="Engineering">Engineering</option>
          <option value="IT Operations">IT Operations</option>
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Customer Support">Customer Support</option>
        </select>
      </div>
      <div id="feedbacks-table">
        <FeedbackTable data={selectedData} error={data.error} />
      </div>
    </div>
  );
}
