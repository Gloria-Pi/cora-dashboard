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
export const DEPARTMENT_TYPE = [
  "Engineering",
  "IT Operations",
  "Product",
  "Design",
  "HR",
  "Sales",
  "Marketing",
  "Customer Support",
] as const;

export type DepartmentType = (typeof DEPARTMENT_TYPE)[number];

// Other approach --> declare union type without as const
// export type DepartmentType =
//   | "Engineering"
//   | "IT Operations"
//   | "Product"
//   | "Design"
//   | "HR"
//   | "Sales"
//   | "Marketing"
//   | "Customer Support";

export const DEFAULT_FEEDBACK_DATA: IFeedback[] = [
  {
    feedback_id: 1,
    submitted_at: "2026-03-02",
    department: "Engineering",
    feedback_text:
      "La scrivania è comoda, ma la connessione Wi-Fi nell'area open space è ancora poco stabile durante le ore di punta.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.08,
    opinions: [
      {
        opinion_id: 1,
        feedback_excerpt: "scrivania è comoda",
        category: "equipment",
        subcategory: "desk",
        sentiment: "positive",
        sentiment_score: 0.55,
      },
      {
        opinion_id: 2,
        feedback_excerpt: "connessione Wi-Fi poco stabile",
        category: "equipment",
        subcategory: "internet_connectivity",
        sentiment: "negative",
        sentiment_score: -0.62,
      },
    ],
  },
  {
    feedback_id: 2,
    submitted_at: "2026-03-03",
    department: "IT Operations",
    feedback_text:
      "There's still too much noise near the server area, especially in the afternoon, which makes it hard to focus.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.75,
    opinions: [
      {
        opinion_id: 3,
        feedback_excerpt: "too much noise near the server area",
        category: "environment",
        subcategory: "noise",
        sentiment: "negative",
        sentiment_score: -0.82,
      },
    ],
  },
  {
    feedback_id: 3,
    submitted_at: "2026-03-05",
    department: "Product",
    feedback_text:
      "Le sale riunioni sono spesso occupate nelle fasce centrali della giornata, rendendo difficile organizzare call all’ultimo minuto.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.58,
    opinions: [
      {
        opinion_id: 4,
        feedback_excerpt: "sale riunioni spesso occupate",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "negative",
        sentiment_score: -0.63,
      },
    ],
  },
  {
    feedback_id: 4,
    submitted_at: "2026-03-06",
    department: "Design",
    feedback_text:
      "Natural light in the office is great and really helps maintain focus throughout the day.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.72,
    opinions: [
      {
        opinion_id: 5,
        feedback_excerpt: "natural light is great",
        category: "environment",
        subcategory: "lighting",
        sentiment: "positive",
        sentiment_score: 0.78,
      },
    ],
  },
  {
    feedback_id: 5,
    submitted_at: "2026-03-08",
    department: "HR",
    feedback_text:
      "Il bagno è generalmente pulito, ma capita ancora troppo spesso che manchino forniture di base come sapone o carta.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.15,
    opinions: [
      {
        opinion_id: 6,
        feedback_excerpt: "bagno generalmente pulito",
        category: "facilities",
        subcategory: "restrooms",
        sentiment: "positive",
        sentiment_score: 0.5,
      },
      {
        opinion_id: 7,
        feedback_excerpt: "mancano forniture di base",
        category: "facilities",
        subcategory: "restrooms",
        sentiment: "negative",
        sentiment_score: -0.55,
      },
    ],
  },
  {
    feedback_id: 6,
    submitted_at: "2026-03-10",
    department: "Sales",
    feedback_text:
      "The cafeteria offers a good variety of meals, but prices feel slightly above average for daily use.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.12,
    opinions: [
      {
        opinion_id: 8,
        feedback_excerpt: "good variety of meals",
        category: "services",
        subcategory: "food_variety",
        sentiment: "positive",
        sentiment_score: 0.58,
      },
      {
        opinion_id: 9,
        feedback_excerpt: "prices feel slightly above average",
        category: "services",
        subcategory: "food_price",
        sentiment: "negative",
        sentiment_score: -0.38,
      },
    ],
  },
  {
    feedback_id: 7,
    submitted_at: "2026-03-12",
    department: "Marketing",
    feedback_text:
      "Le aree comuni sono piacevoli e ben arredate, ideali anche per brevi pause durante la giornata.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.81,
    opinions: [
      {
        opinion_id: 10,
        feedback_excerpt: "aree comuni ben arredate",
        category: "facilities",
        subcategory: "common_areas",
        sentiment: "positive",
        sentiment_score: 0.82,
      },
    ],
  },
  {
    feedback_id: 8,
    submitted_at: "2026-03-15",
    department: "Customer Support",
    feedback_text:
      "Parking is quite limited and finding a spot after 9am is usually very difficult.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.72,
    opinions: [
      {
        opinion_id: 11,
        feedback_excerpt: "parking is quite limited",
        category: "facilities",
        subcategory: "parking",
        sentiment: "negative",
        sentiment_score: -0.74,
      },
    ],
  },
  {
    feedback_id: 9,
    submitted_at: "2026-03-18",
    department: "Engineering",
    feedback_text:
      "La temperatura in ufficio non è costante: al mattino fa freddo mentre nel pomeriggio diventa troppo calda.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.6,
    opinions: [
      {
        opinion_id: 12,
        feedback_excerpt: "temperatura non è costante",
        category: "environment",
        subcategory: "temperature",
        sentiment: "negative",
        sentiment_score: -0.64,
      },
    ],
  },
  {
    feedback_id: 10,
    submitted_at: "2026-03-20",
    department: "Design",
    feedback_text:
      "The ergonomic chairs are very comfortable, although some monitor setups are not properly aligned.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.03,
    opinions: [
      {
        opinion_id: 13,
        feedback_excerpt: "chairs are very comfortable",
        category: "equipment",
        subcategory: "chair",
        sentiment: "positive",
        sentiment_score: 0.7,
      },
      {
        opinion_id: 14,
        feedback_excerpt: "monitor setups not properly aligned",
        category: "equipment",
        subcategory: "hardware",
        sentiment: "negative",
        sentiment_score: -0.52,
      },
    ],
  },
  {
    feedback_id: 11,
    submitted_at: "2026-03-25",
    department: "Engineering",
    feedback_text:
      "La connessione Wi-Fi è migliorata rispetto ai mesi scorsi, ma ci sono ancora rallentamenti sporadici.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.05,
    opinions: [
      {
        opinion_id: 15,
        feedback_excerpt: "connessione Wi-Fi migliorata",
        category: "equipment",
        subcategory: "internet_connectivity",
        sentiment: "positive",
        sentiment_score: 0.4,
      },
      {
        opinion_id: 16,
        feedback_excerpt: "rallentamenti sporadici",
        category: "equipment",
        subcategory: "internet_connectivity",
        sentiment: "negative",
        sentiment_score: -0.35,
      },
    ],
  },
  {
    feedback_id: 12,
    submitted_at: "2026-04-02",
    department: "Product",
    feedback_text:
      "Meeting rooms are well equipped and booking has become easier with the new system.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.68,
    opinions: [
      {
        opinion_id: 17,
        feedback_excerpt: "well equipped meeting rooms",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "positive",
        sentiment_score: 0.73,
      },
    ],
  },
  {
    feedback_id: 13,
    submitted_at: "2026-04-05",
    department: "Sales",
    feedback_text:
      "Il tempo di percorrenza casa-ufficio resta piuttosto lungo, soprattutto negli orari di punta.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.52,
    opinions: [
      {
        opinion_id: 18,
        feedback_excerpt: "tempo di percorrenza piuttosto lungo",
        category: "commuting",
        subcategory: "travel_time",
        sentiment: "negative",
        sentiment_score: -0.57,
      },
    ],
  },
  {
    feedback_id: 14,
    submitted_at: "2026-04-10",
    department: "Marketing",
    feedback_text:
      "Common areas are nice overall, but they can get a bit noisy during lunch hours.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.01,
    opinions: [
      {
        opinion_id: 19,
        feedback_excerpt: "common areas are nice",
        category: "facilities",
        subcategory: "common_areas",
        sentiment: "positive",
        sentiment_score: 0.44,
      },
      {
        opinion_id: 20,
        feedback_excerpt: "a bit noisy during lunch",
        category: "environment",
        subcategory: "noise",
        sentiment: "negative",
        sentiment_score: -0.41,
      },
    ],
  },
  {
    feedback_id: 15,
    submitted_at: "2026-04-11",
    department: "HR",
    feedback_text:
      "Le sedie ergonomiche sono generalmente comode, ma alcune risultano usurate e andrebbero sostituite.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.12,
    opinions: [
      {
        opinion_id: 21,
        feedback_excerpt: "sedie ergonomiche generalmente comode",
        category: "equipment",
        subcategory: "chair",
        sentiment: "positive",
        sentiment_score: 0.55,
      },
      {
        opinion_id: 22,
        feedback_excerpt: "alcune risultano usurate",
        category: "equipment",
        subcategory: "chair",
        sentiment: "negative",
        sentiment_score: -0.42,
      },
    ],
  },
  {
    feedback_id: 16,
    submitted_at: "2026-04-12",
    department: "Engineering",
    feedback_text:
      "The build machines are quite fast, but sometimes they are overloaded during peak hours.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.05,
    opinions: [
      {
        opinion_id: 23,
        feedback_excerpt: "build machines are quite fast",
        category: "equipment",
        subcategory: "hardware",
        sentiment: "positive",
        sentiment_score: 0.52,
      },
      {
        opinion_id: 24,
        feedback_excerpt: "sometimes overloaded during peak hours",
        category: "equipment",
        subcategory: "performance",
        sentiment: "negative",
        sentiment_score: -0.41,
      },
    ],
  },
  {
    feedback_id: 17,
    submitted_at: "2026-04-13",
    department: "Customer Support",
    feedback_text:
      "Il sistema di ticketing è semplice da usare, ma manca qualche funzionalità avanzata.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.1,
    opinions: [
      {
        opinion_id: 25,
        feedback_excerpt: "sistema di ticketing semplice da usare",
        category: "services",
        subcategory: "tools",
        sentiment: "positive",
        sentiment_score: 0.5,
      },
      {
        opinion_id: 26,
        feedback_excerpt: "manca qualche funzionalità avanzata",
        category: "services",
        subcategory: "tools",
        sentiment: "negative",
        sentiment_score: -0.38,
      },
    ],
  },
  {
    feedback_id: 18,
    submitted_at: "2026-04-14",
    department: "Marketing",
    feedback_text:
      "The office location is convenient and well connected to public transport.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.63,
    opinions: [
      {
        opinion_id: 27,
        feedback_excerpt: "well connected to public transport",
        category: "commuting",
        subcategory: "transportation_options",
        sentiment: "positive",
        sentiment_score: 0.66,
      },
    ],
  },
  {
    feedback_id: 19,
    submitted_at: "2026-04-15",
    department: "IT Operations",
    feedback_text:
      "La sala server è ben organizzata, ma la temperatura è spesso troppo alta.",
    overall_sentiment: "neutral",
    overall_sentiment_score: -0.12,
    opinions: [
      {
        opinion_id: 28,
        feedback_excerpt: "sala server ben organizzata",
        category: "environment",
        subcategory: "organization",
        sentiment: "positive",
        sentiment_score: 0.48,
      },
      {
        opinion_id: 29,
        feedback_excerpt: "temperatura troppo alta",
        category: "environment",
        subcategory: "temperature",
        sentiment: "negative",
        sentiment_score: -0.52,
      },
    ],
  },
  {
    feedback_id: 20,
    submitted_at: "2026-04-16",
    department: "Sales",
    feedback_text:
      "Client meeting spaces look professional and leave a good impression.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.7,
    opinions: [
      {
        opinion_id: 30,
        feedback_excerpt: "meeting spaces look professional",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "positive",
        sentiment_score: 0.72,
      },
    ],
  },
  {
    feedback_id: 21,
    submitted_at: "2026-04-17",
    department: "Product",
    feedback_text:
      "Le riunioni spesso iniziano in ritardo per mancanza di sale disponibili.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.55,
    opinions: [
      {
        opinion_id: 31,
        feedback_excerpt: "mancanza di sale disponibili",
        category: "facilities",
        subcategory: "meeting_rooms",
        sentiment: "negative",
        sentiment_score: -0.6,
      },
    ],
  },
  {
    feedback_id: 22,
    submitted_at: "2026-04-17",
    department: "Design",
    feedback_text:
      "The creative spaces are inspiring, although they can get crowded in the afternoon.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.18,
    opinions: [
      {
        opinion_id: 32,
        feedback_excerpt: "creative spaces are inspiring",
        category: "facilities",
        subcategory: "common_areas",
        sentiment: "positive",
        sentiment_score: 0.6,
      },
      {
        opinion_id: 33,
        feedback_excerpt: "can get crowded in the afternoon",
        category: "facilities",
        subcategory: "capacity",
        sentiment: "negative",
        sentiment_score: -0.36,
      },
    ],
  },
  {
    feedback_id: 23,
    submitted_at: "2026-04-18",
    department: "Engineering",
    feedback_text:
      "La disponibilità di monitor aggiuntivi è migliorata, ma non è ancora sufficiente per tutti.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.04,
    opinions: [
      {
        opinion_id: 34,
        feedback_excerpt: "disponibilità di monitor migliorata",
        category: "equipment",
        subcategory: "hardware",
        sentiment: "positive",
        sentiment_score: 0.42,
      },
      {
        opinion_id: 35,
        feedback_excerpt: "non è ancora sufficiente per tutti",
        category: "equipment",
        subcategory: "availability",
        sentiment: "negative",
        sentiment_score: -0.39,
      },
    ],
  },
  {
    feedback_id: 24,
    submitted_at: "2026-04-18",
    department: "HR",
    feedback_text:
      "Internal services are generally efficient and requests are handled بسرعة.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.61,
    opinions: [
      {
        opinion_id: 36,
        feedback_excerpt: "services are generally efficient",
        category: "services",
        subcategory: "efficiency",
        sentiment: "positive",
        sentiment_score: 0.64,
      },
    ],
  },
  {
    feedback_id: 25,
    submitted_at: "2026-04-19",
    department: "Customer Support",
    feedback_text:
      "Gli strumenti interni funzionano bene, ma a volte sono lenti nelle ore di punta.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.0,
    opinions: [
      {
        opinion_id: 37,
        feedback_excerpt: "strumenti interni funzionano bene",
        category: "services",
        subcategory: "tools",
        sentiment: "positive",
        sentiment_score: 0.5,
      },
      {
        opinion_id: 38,
        feedback_excerpt: "a volte sono lenti",
        category: "services",
        subcategory: "performance",
        sentiment: "negative",
        sentiment_score: -0.4,
      },
    ],
  },
  {
    feedback_id: 26,
    submitted_at: "2026-04-19",
    department: "Marketing",
    feedback_text:
      "Office layout is clear and easy to navigate, especially for new joiners.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.67,
    opinions: [
      {
        opinion_id: 39,
        feedback_excerpt: "layout is clear and easy to navigate",
        category: "facilities",
        subcategory: "layout",
        sentiment: "positive",
        sentiment_score: 0.69,
      },
    ],
  },
  {
    feedback_id: 27,
    submitted_at: "2026-04-20",
    department: "IT Operations",
    feedback_text:
      "La rete interna è stabile nella maggior parte dei casi, ma ci sono ancora interruzioni occasionali.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.02,
    opinions: [
      {
        opinion_id: 40,
        feedback_excerpt: "rete interna stabile",
        category: "equipment",
        subcategory: "network",
        sentiment: "positive",
        sentiment_score: 0.44,
      },
      {
        opinion_id: 41,
        feedback_excerpt: "interruzioni occasionali",
        category: "equipment",
        subcategory: "network",
        sentiment: "negative",
        sentiment_score: -0.37,
      },
    ],
  },
  {
    feedback_id: 28,
    submitted_at: "2026-04-20",
    department: "Sales",
    feedback_text:
      "Travel reimbursement process is slow and could be simplified.",
    overall_sentiment: "negative",
    overall_sentiment_score: -0.5,
    opinions: [
      {
        opinion_id: 42,
        feedback_excerpt: "reimbursement process is slow",
        category: "services",
        subcategory: "processes",
        sentiment: "negative",
        sentiment_score: -0.55,
      },
    ],
  },
  {
    feedback_id: 29,
    submitted_at: "2026-04-20",
    department: "Design",
    feedback_text:
      "Le postazioni di lavoro sono ben organizzate e permettono di lavorare in modo efficiente.",
    overall_sentiment: "positive",
    overall_sentiment_score: 0.73,
    opinions: [
      {
        opinion_id: 43,
        feedback_excerpt: "postazioni ben organizzate",
        category: "equipment",
        subcategory: "desk",
        sentiment: "positive",
        sentiment_score: 0.75,
      },
    ],
  },
  {
    feedback_id: 30,
    submitted_at: "2026-04-20",
    department: "Product",
    feedback_text:
      "Overall, the workplace is fine, but there is still room for improvement in several areas.",
    overall_sentiment: "neutral",
    overall_sentiment_score: 0.1,
    opinions: [
      {
        opinion_id: 44,
        feedback_excerpt: "workplace is fine overall",
        category: "environment",
        subcategory: "overall_experience",
        sentiment: "neutral",
        sentiment_score: 0.1,
      },
    ],
  },
];
