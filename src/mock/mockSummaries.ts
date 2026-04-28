import type {
  ICategorySummaryData,
  ISummaryData,
} from "../constants/ai.constants";

export const MOCK_GENERAL: ISummaryData[] = [
  {
    type: "positive",
    points: [
      "Comfortable and well-organized workstations and ergonomic chairs",
      "Positive feedback on common areas and inspiring creative spaces",
      "Meeting rooms are well-equipped and professional",
      "General efficiency of internal services and tools",
    ],
  },
  {
    type: "negative",
    points: [
      "Difficulty booking meeting rooms due to high demand",
      "Instability and performance issues with network and Wi-Fi",
      "Equipment and hardware performance issues during peak hours",
      "Inconsistent office temperature and heat issues",
      "Noise disturbances in common and work areas",
    ],
  },
];

export const MOCK_CATEGORY_SUMMARY: ICategorySummaryData[] = [
  {
    category: "environment",
    points: [
      "Great natural light improves focus",
      "Server room is well organized",
      "Inconsistent temperature throughout the day",
      "High noise levels in common areas and near server room",
    ],
  },
  {
    category: "facilities",
    points: [
      "Clear office layout and professional meeting spaces",
      "Common areas are well-furnished and pleasant",
      "Restrooms are generally kept clean",
      "Meeting rooms are frequently unavailable or occupied",
      "Parking is limited and difficult to find after 9am",
    ],
  },
  {
    category: "equipment",
    points: [
      "Ergonomic chairs are generally comfortable",
      "Workstations and desks are well-organized",
      "Wi-Fi connectivity and hardware availability have improved",
      "Wi-Fi is unstable during peak hours",
      "Equipment like chairs and monitors need maintenance or better alignment",
    ],
  },
  {
    category: "services",
    points: [
      "Internal services and tools are generally efficient",
      "Ticketing system is simple to use",
      "Travel reimbursement process is slow",
      "Internal tools can be slow during peak usage",
      "Cafeteria prices are slightly above average",
    ],
  },
  {
    category: "commuting",
    points: [
      "Office location has good public transport connections",
      "Daily commute time is long, especially during peak hours",
    ],
  },
];
