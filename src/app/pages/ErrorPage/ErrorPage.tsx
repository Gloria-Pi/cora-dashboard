import { useEffect, useState } from "react";

// import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
// import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";

import "./ErrorPage.scss";

export default function ErrorPage() {
  // const PIE_COLORS = [
  //   "#1f77b4",
  //   "#ff7f0e",
  //   "#2ca02c",
  //   "#d62728",
  //   "#9467bd",
  //   "#8c564b",
  //   "#e377c2",
  //   "#7f7f7f",
  //   "#bcbd22",
  //   "#17becf",
  //   "#393b79",
  //   "#637939",
  //   "#8c6d31",
  //   "#843c39",
  //   "#7b4173",
  //   "#3182bd",
  //   "#31a354",
  //   "#756bb1",
  //   "#636363",
  //   "#e6550d",
  //   "#969696",
  //   "#dd1c77",
  //   "#6baed6",
  //   "#74c476",
  //   "#9e9ac8",
  //   "#bdbdbd",
  //   "#fd8d3c",
  //   "#fdd0a2",
  //   "#c7e9c0",
  //   "#dadaeb",
  // ];

  interface BaseLocationData {
    codeName: string;
    url: string;
  }
  interface ExtendedLocationData extends BaseLocationData {
    enName: string;
  }

  const [locationData, setLocationData] = useState<ExtendedLocationData[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/location-area/?limit=20")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Throw error 1: ${response.status}`);
        }
        return response.json();
      })
      .then((promise) => {
        // console.log("PROMISE: ", promise);
        const multiLocationData: BaseLocationData[] = promise.results.map(
          (locationItem: { name: string; url: string }) => {
            // console.log("BASE OBJ: ", locationItem);
            return {
              codeName: locationItem.name,
              url: locationItem.url,
            };
          },
        );
        return multiLocationData;
      })

      .then((multiLocationData) => {
        const multiLocationPlus: Promise<ExtendedLocationData>[] =
          multiLocationData.map((singleItem) => {
            return fetch(singleItem.url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`Throw error 2: ${response.status}`);
                }
                return response.json();
              })
              .then((promise) => {
                const extendedData: ExtendedLocationData = {
                  ...singleItem,
                  enName: promise.names[0].name,
                };
                // console.log("EXTENDED OBJ: ", extendedData);
                return extendedData;
              });
          });
        return Promise.all(multiLocationPlus);
      })
      .then((finalData: ExtendedLocationData[]) => {
        setLocationData(finalData);
      })
      .catch((error) => {
        console.log("ERRORE: ", error);
      });
  }, []);

  console.log("STATE LOCATION: ", locationData);

  interface Encounter {
    id: number;
    pokemon: string;
  }

  const [selectedLocation, setSelectedLocation] = useState("");
  const [encounterablePkmn, setEncounterablePkmn] = useState<Encounter[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/location-area/${selectedLocation}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Throw error 3: ${response.status}`);
        }
        return response.json();
      })
      .then((promise) => {
        console.log(promise);
        const allEncounters: Encounter[] = promise.pokemon_encounters.map(
          (
            pkmnEn: {
              pokemon: { name: string; url: string };
              version_details: Array<object>;
            },
            index: number,
          ) => {
            // console.log("PKMN EN: ", pkmnEn),
            return { id: index, pokemon: pkmnEn.pokemon.name };
          },
        );
        return Promise.all(allEncounters);
      })
      .then((allEncounters) => {
        setEncounterablePkmn(allEncounters);
      })
      .catch((err) => console.log("ERR: ", err));
  }, [selectedLocation]);

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
            <li key={p.id}>- {p.pokemon}</li>
          ))}
        </ul>
      </div>

      {/* <ChartCard title="Pkmn Distribution per Area" minHeight={420}>
        <CustomPieChart
          data={coloredPkmnTypesList}
          outerRadius="85%"
          innerRadius="60%"
        />
      </ChartCard> */}
    </div>
  );
}
