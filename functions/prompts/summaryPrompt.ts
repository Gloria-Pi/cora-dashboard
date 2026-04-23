import { IFeedback } from "../../src/constants/global.constants";

export default function summaryCardsPrompt(feedbacks: IFeedback[]) {
  return `
You are an assistant that analyzes user feedback and produces structured summaries.

Your task:
Analyze the provided feedback data and generate a JSON response with two sections:
- "positive", for Positive Trends
- "negative", for Emerging Issues

Instructions:
- Positive Trends must include recurring positive patterns, strengths, or appreciated aspects.
- Emerging Issues must include recurring problems, complaints, or negative signals.
- Focus only on relevant and repeated insights.
- Do NOT invent information.

Formatting rules:
- Each section must contain a list of short bullet points (max 5).
- Each bullet point must be concise (max 20 words).
- If a positive trend or negative issue appears across multiple feedback entries, include in parentheses the number of users who mentioned it, e.g. (1 mention).
- Avoid duplicates and generic statements.
- Return ONLY valid JSON. No extra text, no explanation.

Return a valid JSON array matching this schema:
[
  { "type": "positive", "points": string[] },
  { "type": "negative", "points": string[] }
]

Do not wrap the response in backticks or include any additional text.

If you cannot comply, return:
{ "positive": [], "negative": [] }

Input:
${JSON.stringify(feedbacks)}
`;
}

// function buildPromptVerBig(feedbacks: IFeedback[]) {
//   return `
// Analizza questi feedback utente e crea un riassunto esecutivo scritto in formato markdown. Il testo deve essere chiaro e sintetico.
// Usa:
// - titolo con ###
// - titoli delle categorie con ####
// - sezioni con **, no -
// - liste con -
// - grassetto con ** per evidenziare le parole chiave
// - niente HTML

// Dividi il testo generato in sezioni. Ogni sezione rappresenta una delle categorie che nella lista feedback sono chiamate "categories", e per ognuna devi evidenziare:
// - trend principali
// - problemi ricorrenti
// - suggerimenti utili

// Lista feedback:
// ${JSON.stringify(feedbacks)}
// `;
// }
