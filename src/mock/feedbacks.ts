import type { IFeedback } from "../constants/global.constants";

export const FEEDBACK_CATEGORIES = [
  "environment",
  "facilities",
  "equipment",
  "services",
  "commuting",
] as const;

export type FeedbackCategory = (typeof FEEDBACK_CATEGORIES)[number];

// Other approach --> declare union type without as const
export type DepartmentType =
  | "Engineering"
  | "IT Operations"
  | "Product"
  | "Design"
  | "HR"
  | "Sales"
  | "Marketing"
  | "Customer Support";

export const DEFAULT_FEEDBACK_DATA: IFeedback[] = [
  {
    feedback_id: 1,
    submitted_at: "2026-01-12",
    department: "Engineering",
    feedback_text:
      "La scrivania è comoda ma la connessione internet è spesso lenta.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.1,
    opinions: [
      {
        opinion_id: 1,
        feedback_excerpt: "scrivania è comoda",
        category: "equipment",
        subcategory: "desk",
        sentiment: "positive",
        sentiment_score: 0.6,
      },
      {
        opinion_id: 2,
        feedback_excerpt: "connessione internet è spesso lenta",
        category: "equipment",
        subcategory: "internet_connectivity",
        sentiment: "negative",
        sentiment_score: -0.7,
      },
    ],
  },
  {
    feedback_id: 2,
    submitted_at: "2026-01-12",
    department: "IT Operations",
    feedback_text:
      "Troppo rumore vicino alla zona server, difficile concentrarsi.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.8,
    opinions: [
      {
        opinion_id: 3,
        feedback_excerpt: "Troppo rumore vicino alla zona server",
        category: "environment",
        subcategory: "noise",
        sentiment: "negative",
        sentiment_score: -0.85,
      },
    ],
  },
  {
    feedback_id: 3,
    submitted_at: "2026-01-13",
    department: "Product",
    feedback_text:
      "Le sale riunioni sono spesso occupate, difficile pianificare meeting.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.6,
    opinions: [
      {
        opinion_id: 4,
        feedback_excerpt: "Le sale riunioni sono spesso occupate",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "negative",
        sentiment_score: -0.65,
      },
    ],
  },
  {
    feedback_id: 4,
    submitted_at: "2026-01-13",
    department: "Design",
    feedback_text:
      "La luce naturale in ufficio è ottima, migliora la concentrazione.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.7,
    opinions: [
      {
        opinion_id: 5,
        feedback_excerpt: "La luce naturale in ufficio è ottima",
        category: "environment",
        subcategory: "lighting",
        sentiment: "positive",
        sentiment_score: 0.75,
      },
    ],
  },
  {
    feedback_id: 5,
    submitted_at: "2026-01-14",
    department: "HR",
    feedback_text:
      "Il bagno è sempre pulito ma spesso manca la carta igienica.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.1,
    opinions: [
      {
        opinion_id: 6,
        feedback_excerpt: "Il bagno è sempre pulito",
        category: "facilities",
        subcategory: "restrooms",
        sentiment: "positive",
        sentiment_score: 0.6,
      },
      {
        opinion_id: 7,
        feedback_excerpt: "spesso manca la carta igienica",
        category: "facilities",
        subcategory: "restrooms",
        sentiment: "negative",
        sentiment_score: -0.5,
      },
    ],
  },
  {
    feedback_id: 6,
    submitted_at: "2026-01-14",
    department: "Sales",
    feedback_text:
      "La mensa offre molta varietà di cibi, ma il prezzo è un po’ alto.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.2,
    opinions: [
      {
        opinion_id: 8,
        feedback_excerpt: "molta varietà di cibi",
        category: "services",
        subcategory: "food_variety",
        sentiment: "positive",
        sentiment_score: 0.6,
      },
      {
        opinion_id: 9,
        feedback_excerpt: "il prezzo è un po’ alto",
        category: "services",
        subcategory: "food_price",
        sentiment: "negative",
        sentiment_score: -0.4,
      },
    ],
  },
  {
    feedback_id: 7,
    submitted_at: "2026-01-15",
    department: "Marketing",
    feedback_text: "Le aree comuni sono molto comode e ben arredate.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.8,
    opinions: [
      {
        opinion_id: 10,
        feedback_excerpt: "aree comuni sono molto comode e ben arredate",
        category: "facilities",
        subcategory: "common_areas",
        sentiment: "positive",
        sentiment_score: 0.8,
      },
    ],
  },
  {
    feedback_id: 8,
    submitted_at: "2026-01-15",
    department: "Customer Support",
    feedback_text:
      "Il parcheggio aziendale è spesso pieno, trovare posto è difficile.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.7,
    opinions: [
      {
        opinion_id: 11,
        feedback_excerpt: "parcheggio aziendale è spesso pieno",
        category: "facilities",
        subcategory: "parking",
        sentiment: "negative",
        sentiment_score: -0.7,
      },
    ],
  },
  {
    feedback_id: 9,
    submitted_at: "2026-01-16",
    department: "Engineering",
    feedback_text:
      "La temperatura in ufficio varia troppo, a volte troppo freddo, altre troppo caldo.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.6,
    opinions: [
      {
        opinion_id: 12,
        feedback_excerpt: "temperatura in ufficio varia troppo",
        category: "environment",
        subcategory: "temperature",
        sentiment: "negative",
        sentiment_score: -0.6,
      },
    ],
  },
  {
    feedback_id: 10,
    submitted_at: "2026-01-16",
    department: "Design",
    feedback_text:
      "La sedia ergonomica è molto comoda, ma alcuni monitor sono mal posizionati.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.05,
    opinions: [
      {
        opinion_id: 13,
        feedback_excerpt: "sedia ergonomica è molto comoda",
        category: "equipment",
        subcategory: "chair",
        sentiment: "positive",
        sentiment_score: 0.7,
      },
      {
        opinion_id: 14,
        feedback_excerpt: "alcuni monitor sono mal posizionati",
        category: "equipment",
        subcategory: "hardware",
        sentiment: "negative",
        sentiment_score: -0.6,
      },
    ],
  },
  {
    feedback_id: 11,
    submitted_at: "2026-01-17",
    department: "Engineering",
    feedback_text:
      "La connessione Wi-Fi nell’area open space è instabile e rallenta il lavoro.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.65,
    opinions: [
      {
        opinion_id: 15,
        feedback_excerpt: "connessione Wi-Fi nell’area open space è instabile",
        category: "equipment",
        subcategory: "internet_connectivity",
        sentiment: "negative",
        sentiment_score: -0.72,
      },
    ],
  },
  {
    feedback_id: 12,
    submitted_at: "2026-01-17",
    department: "Product",
    feedback_text: "Le sale riunioni sono moderne e ben attrezzate.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.66,
    opinions: [
      {
        opinion_id: 16,
        feedback_excerpt: "sale riunioni sono moderne e ben attrezzate",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "positive",
        sentiment_score: 0.74,
      },
    ],
  },
  {
    feedback_id: 13,
    submitted_at: "2026-01-18",
    department: "Sales",
    feedback_text:
      "Il tempo di viaggio per arrivare in ufficio è piuttosto lungo.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.5,
    opinions: [
      {
        opinion_id: 17,
        feedback_excerpt:
          "tempo di viaggio per arrivare in ufficio è piuttosto lungo",
        category: "commuting",
        subcategory: "travel_time",
        sentiment: "negative",
        sentiment_score: -0.58,
      },
    ],
  },
  {
    feedback_id: 14,
    submitted_at: "2026-01-18",
    department: "Marketing",
    feedback_text:
      "Gli spazi comuni sono piacevoli ma a volte un po' rumorosi.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.02,
    opinions: [
      {
        opinion_id: 18,
        feedback_excerpt: "spazi comuni sono piacevoli",
        category: "facilities",
        subcategory: "common_areas",
        sentiment: "positive",
        sentiment_score: 0.45,
      },
      {
        opinion_id: 19,
        feedback_excerpt: "a volte un po' rumorosi",
        category: "environment",
        subcategory: "noise",
        sentiment: "negative",
        sentiment_score: -0.42,
      },
    ],
  },
  {
    feedback_id: 15,
    submitted_at: "2026-01-19",
    department: "HR",
    feedback_text:
      "Le sedie ergonomiche sono molto comode e migliorano la postura.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.71,
    opinions: [
      {
        opinion_id: 20,
        feedback_excerpt: "sedie ergonomiche sono molto comode",
        category: "equipment",
        subcategory: "chair",
        sentiment: "positive",
        sentiment_score: 0.76,
      },
    ],
  },
  {
    feedback_id: 16,
    submitted_at: "2026-01-19",
    department: "IT Operations",
    feedback_text:
      "Il parcheggio è ampio ma spesso manca l’illuminazione nelle ore serali.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.1,
    opinions: [
      {
        opinion_id: 21,
        feedback_excerpt: "parcheggio è ampio",
        category: "facilities",
        subcategory: "parking",
        sentiment: "positive",
        sentiment_score: 0.5,
      },
      {
        opinion_id: 22,
        feedback_excerpt: "manca l’illuminazione nelle ore serali",
        category: "environment",
        subcategory: "lighting",
        sentiment: "negative",
        sentiment_score: -0.48,
      },
    ],
  },
  {
    feedback_id: 17,
    submitted_at: "2026-01-20",
    department: "Customer Support",
    feedback_text: "Il cibo della mensa è buono ma le porzioni sono piccole.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.05,
    opinions: [
      {
        opinion_id: 23,
        feedback_excerpt: "cibo della mensa è buono",
        category: "services",
        subcategory: "food_quality",
        sentiment: "positive",
        sentiment_score: 0.58,
      },
      {
        opinion_id: 24,
        feedback_excerpt: "porzioni sono piccole",
        category: "services",
        subcategory: "food_variety",
        sentiment: "negative",
        sentiment_score: -0.32,
      },
    ],
  },
  {
    feedback_id: 18,
    submitted_at: "2026-01-20",
    department: "Design",
    feedback_text: "La luce artificiale nelle sale riunioni è troppo forte.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.44,
    opinions: [
      {
        opinion_id: 25,
        feedback_excerpt: "luce artificiale nelle sale riunioni è troppo forte",
        category: "environment",
        subcategory: "lighting",
        sentiment: "negative",
        sentiment_score: -0.51,
      },
    ],
  },
  {
    feedback_id: 19,
    submitted_at: "2026-01-21",
    department: "Engineering",
    feedback_text:
      "Le scrivanie sono abbastanza spaziose per lavorare con più monitor.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.6,
    opinions: [
      {
        opinion_id: 26,
        feedback_excerpt: "scrivanie sono abbastanza spaziose",
        category: "equipment",
        subcategory: "desk",
        sentiment: "positive",
        sentiment_score: 0.67,
      },
    ],
  },
  {
    feedback_id: 20,
    submitted_at: "2026-01-21",
    department: "Product",
    feedback_text:
      "I mezzi pubblici per raggiungere l’ufficio sono abbastanza comodi.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.43,
    opinions: [
      {
        opinion_id: 27,
        feedback_excerpt:
          "mezzi pubblici per raggiungere l’ufficio sono abbastanza comodi",
        category: "commuting",
        subcategory: "transportation_options",
        sentiment: "positive",
        sentiment_score: 0.48,
      },
    ],
  },
];
