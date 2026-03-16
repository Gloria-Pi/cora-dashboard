// ---- FEEDBACKS & OPINIONS DATA ---- //
export interface IRechartsData {
  [key: string]: string | number | null;
}

export interface IFeedback {
  opinions: {
    category: string;
    sentiment_score: number;
  }[];
}

// ---- POKEAPI DATA ---- //
export interface IBaseLocationData {
  codeName: string;
  url: string;
}
export interface IExtendedLocationData extends IBaseLocationData {
  enName: string;
}

export interface IEncounter {
  id: number;
  pokemon: string;
  encounterChance: number;
}
