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

function buildPrompt(feedbacks: IFeedback[]) {
  return `
Analizza questi feedback utente e crea un riassunto esecutivo scritto in formato markdown. Il testo deve essere chiaro e sintetico.
Usa:
- titoli con ###
- liste con -
- grassetto con **
- niente HTML

Dividi il testo generato in sezioni. Ogni sezione rappresenta una delle categorie che nella lista feedback sono chiamate "categories", e per ognuna devi evidenziare:
- trend principali
- problemi ricorrenti
- suggerimenti utili

Lista feedback:
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

    const prompt = buildPrompt(feedbacks);

    const geminiRes = await fetchGemini(prompt, env.GEMINI_API_KEY);

    if (!geminiRes.ok) {
      const err = await geminiRes.text();
      return new Response(JSON.stringify({ error: `Gemini error: ${err}` }), {
        status: geminiRes.status,
      });
    }

    const data = (await geminiRes.json()) as GeminiResponse;

    const summary =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Nessun riassunto disponibile.";

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

// // <reference types="@cloudflare/workers-types" />
// import { IFeedback } from "../../src/constants/global.constants";

// interface Env {
//   GEMINI_API_KEY: string;
// }

// interface GeminiResponse {
//   candidates?: Array<{
//     content?: {
//       parts?: Array<{
//         text?: string;
//       }>;
//     };
//   }>;
// }

// export const onRequestPost: PagesFunction<Env> = async (context) => {
//   try {
//     const feedbackData = (await context.request.json()) as IFeedback[];
//     const API_KEY = context.env.GEMINI_API_KEY;

//     if (!API_KEY) {
//       return new Response(JSON.stringify({ error: "Chiave API mancante" }), {
//         status: 500,
//       });
//     }

//     const prompt = `Analizza questi feedback: ${JSON.stringify(feedbackData)}. Crea un riassunto esecutivo.`;

//     const geminiResponse = await fetch(
//       `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: prompt }] }],
//         }),
//       },
//     );

//     const data = (await geminiResponse.json()) as GeminiResponse;

//     let summary = "Nessun riassunto disponibile.";

//     if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
//       summary = data.candidates[0].content.parts[0].text;
//     } else if ((data as any).error) {
//       summary = `Errore API: ${(data as any).error.message}`;
//     }

//     console.log("Summary finale:", summary);

//     return new Response(JSON.stringify({ summary }), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Worker Error:", error);
//     return new Response(
//       JSON.stringify({ error: "Errore durante l'elaborazione" }),
//       { status: 500 },
//     );
//   }
// };
