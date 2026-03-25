export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

export const formatText = (text: string, maxLength: number = 80) => {
  if (text.length <= maxLength) return `"${text}"`;
  return `"${text.substring(0, maxLength)}..."`;
};

export const formatCategory = (text: string) => {
  const formatted = text
    .replace(/[_-]/g, " ")
    .replace(/([A-Z])/g, " $1")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
    .trim();

  return formatted.charAt(0).toUpperCase() + formatted.slice(1).toLowerCase();
};

export const capitalizeSentiment = (sentiment: string) => {
  return sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
};
