import { useEffect, useState } from "react";

import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import type {
  IBaseLocationData,
  IExtendedLocationData,
} from "../../../constants/global.constants";
import useEncounterData from "../../../hooks/useEncounterData";
import PIE_COLORS from "../../../styles/constants";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const [locationData, setLocationData] = useState<IExtendedLocationData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/location-area/?limit=20",
      );
      if (!response.ok) {
        throw new Error(`Throw error 1: ${response.status}`);
      }
      const json = await response.json();

      const multiLocationData: IBaseLocationData[] = json.results.map(
        (locationItem: { name: string; url: string }) => {
          return {
            codeName: locationItem.name,
            url: locationItem.url,
          };
        },
      );

      const multiLocationPlus: Promise<IExtendedLocationData>[] =
        multiLocationData.map(async (singleItem) => {
          // return response2;
          const response2 = await fetch(singleItem.url);
          if (!response2.ok) {
            throw new Error(`Throw error 2: ${response2.status}`);
          }
          const json2 = await response2.json();

          const extendedData: IExtendedLocationData = {
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

  const { selectedLocation, setSelectedLocation, encounterablePkmn } =
    useEncounterData();

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
