import { useEffect, useState } from "react";

import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const PIE_COLORS = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#393b79",
    "#637939",
    "#8c6d31",
    "#843c39",
    "#7b4173",
    "#3182bd",
    "#31a354",
    "#756bb1",
    "#636363",
    "#e6550d",
    "#969696",
    "#dd1c77",
    "#6baed6",
    "#74c476",
    "#9e9ac8",
    "#bdbdbd",
    "#fd8d3c",
    "#fdd0a2",
    "#c7e9c0",
    "#dadaeb",
  ];
  console.log("ciao");

  interface BaseLocationData {
    codeName: string;
    url: string;
  }
  interface ExtendedLocationData extends BaseLocationData {
    enName: string;
  }

  const [locationData, setLocationData] = useState<ExtendedLocationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/location-area/?limit=20",
      );
      if (!response.ok) {
        throw new Error(`Throw error 1: ${response.status}`);
      }
      const json = await response.json();

      const multiLocationData: BaseLocationData[] = json.results.map(
        (locationItem: { name: string; url: string }) => {
          return {
            codeName: locationItem.name,
            url: locationItem.url,
          };
        },
      );

      const multiLocationPlus: Promise<ExtendedLocationData>[] =
        multiLocationData.map(async (singleItem) => {
          // return response2;
          const response2 = await fetch(singleItem.url);
          if (!response2.ok) {
            throw new Error(`Throw error 2: ${response2.status}`);
          }
          const json2 = await response2.json();

          const extendedData: ExtendedLocationData = {
            ...singleItem,
            enName: json2.names[0].name,
          };
          return extendedData;
        });

      const finalData = await Promise.all(multiLocationPlus);

      setLocationData(finalData);
    };
    fetchData().catch((error) => {
      console.log("ERRORE: ", error);
    });
  }, []);

  interface Encounter {
    id: number;
    pokemon: string;
    encounterChance: number;
  }

  const [selectedLocation, setSelectedLocation] = useState("");
  const [encounterablePkmn, setEncounterablePkmn] = useState<Encounter[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://pokeapi.co/api/v2/location-area/${selectedLocation}`,
      );
      if (!data.ok) {
        throw new Error(`Thrown error ${data.status}`);
      }
      const json = await data.json();

      const allEncounters: Encounter[] = json.pokemon_encounters.map(
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
    };
    fetchData().catch((err) => console.log("ERR: ", err));
  }, [selectedLocation]);

  const pkmnEncounterPercentage = encounterablePkmn.map((p, i) => {
    return { name: p.pokemon, value: p.encounterChance, fill: PIE_COLORS[i] };
  });

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>

      <label style={{ padding: "30px" }}>
        Choose a location:
        <select
          name="locations"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          {selectedLocation === "" && <option value=""> LOCATION </option>}

          {locationData.map((locationItem, i) => {
            return (
              <option key={i} value={locationItem.codeName}>
                {locationItem.enName}
              </option>
            );
          })}
        </select>
      </label>

      <p style={{ padding: "30px" }}>
        Your selected location: {selectedLocation}
      </p>

      <div style={{ padding: "30px" }}>
        <p>Pokemon you'll encounter:</p>
        <ul>
          {encounterablePkmn.map((p) => (
            <li key={p.id}>
              - {p.pokemon}: {p.encounterChance / 10}%
            </li>
          ))}
        </ul>
      </div>

      <ChartCard title="Pkmn Distribution per Area" minHeight={420}>
        <CustomPieChart
          data={pkmnEncounterPercentage}
          outerRadius="85%"
          innerRadius="60%"
        />
      </ChartCard>
    </div>
  );
}
