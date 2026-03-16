import { useEffect, useState } from "react";

import type { IEncounter } from "../constants/global.constants";
import fetchData from "../services/pokemonApi";

export default function useEncounterData() {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [encounterablePkmn, setEncounterablePkmn] = useState<IEncounter[]>([]);

  useEffect(() => {
    if (!selectedLocation) return;

    const fetchLocationEncounters = async () => {
      try {
        const json = await fetchData(
          `https://pokeapi.co/api/v2/location-area/${selectedLocation}`,
        );

        const allEncounters: IEncounter[] = json.pokemon_encounters.map(
          (
            pkmnEn: {
              pokemon: { name: string; url: string };
              version_details: {
                max_chance: number;
              }[];
            },
            index: number,
          ) => {
            return {
              id: index,
              pokemon: pkmnEn.pokemon.name,
              encounterChance: pkmnEn.version_details[0].max_chance,
            };
          },
        );

        setEncounterablePkmn(allEncounters);
      } catch (err) {
        console.log("ERROR ON ENCOUNTERABLE PKMN FETCH:", err);
      }
    };

    fetchLocationEncounters();
  }, [selectedLocation]);

  return { selectedLocation, setSelectedLocation, encounterablePkmn };
}
