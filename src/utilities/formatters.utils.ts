/* GENERAL */

export function capitalizeWord(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/* STATEMENT CARD */

export function formatCategory(text: string) {
  const formatted = text
    .replace(/[_-]/g, " ")
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
}
