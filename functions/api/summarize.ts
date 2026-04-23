// <reference types="@cloudflare/workers-types" />
import { IFeedback } from "../../src/constants/global.constants";

interface Env {
  GEMINI_API_KEY: string;
}

interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}

function sanitizeSummary(summary: string) {
  try {
    // Trim just in case
    let cleaned = summary.trim();

    // Remove ```json ... ``` oppure ``` ... ```
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/^```[a-zA-Z]*\n?/, "").replace(/```$/, "");
    }

    // Parse directly (handles \n and escaped quotes automatically)
    return JSON.parse(cleaned);
  } catch (err) {
    throw new Error("Invalid JSON format: " + err.message);
  }
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

function summaryCardsPrompt(feedbacks: IFeedback[]) {
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

function fetchGemini(prompt: string, apiKey: string) {
  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    },
  );
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const feedbacks = (await request.json()) as IFeedback[];

    if (!env.GEMINI_API_KEY) {
      return new Response(JSON.stringify({ error: "Chiave API mancante" }), {
        status: 500,
      });
    }

    const prompt = summaryCardsPrompt(feedbacks);

    const geminiRes = await fetchGemini(prompt, env.GEMINI_API_KEY);

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      return new Response(JSON.stringify({ error: `Gemini error: ${err}` }), {
        status: geminiRes.status,
      });
    }

    const data = (await geminiRes.json()) as GeminiResponse;

    const summary = sanitizeSummary(
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
        "Nessun riassunto disponibile.",
    );

    console.log("Summary finale:", summary);

    return new Response(JSON.stringify({ summary }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Worker Error:", error);
    return new Response(
      JSON.stringify({ error: "Errore durante l'elaborazione" }),
      { status: 500 },
    );
  }
};
