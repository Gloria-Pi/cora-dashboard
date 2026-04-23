// <reference types="@cloudflare/workers-types" />
import { IFeedback } from "../../src/constants/global.constants";
import categoryTrendPrompt from "../prompts/categoryTrendPrompt";
import summaryCardsPrompt from "../prompts/summaryPrompt";
import callGemini from "../utils/callGemini";
import sanitizeOutput from "../utils/sanitizeOutput";

interface Env {
  GEMINI_API_KEY: string;
}

type RequestBody = {
  mode: string;
  feedbacks: IFeedback[];
};

type GeminiSuccessResponse = {
  candidates?: Array<{
    content?: {
      parts?: { text?: string }[];
    };
  }>;
};

type GeminiErrorResponse = {
  error?: {
    code: number;
    message: string;
    status: string;
  };
};

type GeminiResponse = GeminiSuccessResponse | GeminiErrorResponse;

function isGeminiError(res: GeminiResponse): res is GeminiErrorResponse {
  return "error" in res;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const { mode, feedbacks } = (await request.json()) as RequestBody;

    if (!env.GEMINI_API_KEY) {
      return Response.json({ error: "Missing API Key" }, { status: 500 });
    }

    let promptFn;

    if (mode === "summaries") promptFn = summaryCardsPrompt;
    if (mode === "categories") promptFn = categoryTrendPrompt;

    if (!promptFn) {
      return Response.json({ error: "Invalid mode" }, { status: 400 });
    }

    const prompt = promptFn(feedbacks);

    const geminiRes = await callGemini(prompt, env.GEMINI_API_KEY);

    const data = (await geminiRes.json()) as GeminiResponse;

    // handle Gemini API-level HTTP errors
    if (!geminiRes.ok || isGeminiError(data)) {
      return Response.json(
        {
          error: isGeminiError(data)
            ? data.error?.message
            : "Gemini request failed",
        },
        { status: geminiRes.status },
      );
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return Response.json({ error: "Empty Gemini response" }, { status: 502 });
    }

    const output = sanitizeOutput(text);

    return Response.json({ output });
  } catch (error) {
    console.error("Worker Error:", error);
    return Response.json(
      { error: "Errore durante l'elaborazione" },
      { status: 500 },
    );
  }
};
