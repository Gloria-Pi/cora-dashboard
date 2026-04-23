export default function sanitizeOutput(summary: string) {
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
