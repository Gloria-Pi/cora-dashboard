import { IFeedback } from "../../src/constants/global.constants";

export default function categoryTrendPrompt(feedbacks: IFeedback[]) {
  return `
You are an assistant that analyzes user feedback and produces structured summaries grouped by category.

Your task:
Analyze the provided feedback data and generate a JSON response containing summaries for each feedback category.

Categories:
- environment
- facilities
- equipment
- services
- commuting

Instructions:
- For each category, identify both positive and negative trends.
- Focus only on recurring, relevant insights.
- Do NOT invent information.
- Avoid duplicates and overly generic statements.

Formatting rules:
- Return ONLY valid JSON. No extra text, no explanation.
- Each category must contain a maximum of 5 bullet points.
- Each bullet point must be a short string (max 20 words).
- Each bullet point must start with:
  - "✓" for positive trends
  - "✗" for negative trends
- If a trend appears across multiple feedback entries, include the number of mentions in parentheses, e.g. (2 mentions).
- If no data exists for a category, return an empty array for that category.

Return a valid JSON object matching this schema:
[
  { "type": "environment", "points": string[] },
  { "type": "facilities", "points": string[] },
  { "type": "equipment", "points": string[] },
  { "type": "services", "points": string[] },
  { "type": "commuting", "points": string[] }
]

Input:
${JSON.stringify(feedbacks)}
`;
}
