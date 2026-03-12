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

  interface TypeData {
    name: string;
    url: string;
    value: number | string;
  }
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
            console.log("BASE OBJ: ", locationItem);
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

  console.log("check esterno: ", locationData);

  const [pkmnTypesList, setPkmnTypesList] = useState<TypeData[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => {
        if (response) {
          console.log("response: ", response);
          const promise = response.json();
          return promise;
        }
        throw new Error();
      })
      .then((gift) => {
        const nameUrlArray: TypeData[] = gift.results.map((r: TypeData) => ({
          name: r.name,
          url: r.url,
        }));
        // console.log("nameUrlArray: ", nameUrlArray);

        return nameUrlArray;
      })

      .then((nameUrlArray) => {
        const pippo = nameUrlArray.map(async (item) => {
          const a = await fetch(`${item.url}`);
          const b = await a.json();
          const numPkmn: number = b.pokemon.length;
          return { ...item, value: numPkmn };
        });
        return Promise.all(pippo);
      })
      .then((a) => {
        setPkmnTypesList(a);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // console.log("LISTA TIPI: ", pkmnTypesList);

  const coloredPkmnTypesList = pkmnTypesList.map((item, index) => ({
    ...item,
    fill: PIE_COLORS[index],
  }));

  // console.log("LISTINA: ", coloredPkmnTypesList);

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>

      <label htmlFor="locations">Choose a location:</label>
      <select name="locations" id="locations">
        {locationData.map((locationItem, i) => {
          return (
            <option key={i} value={locationItem.codeName}>
              {locationItem.enName}
            </option>
          );
        })}
      </select>

      <ChartCard title="Pkmn Distribution per Area" minHeight={420}>
        <CustomPieChart
          data={coloredPkmnTypesList}
          outerRadius="85%"
          innerRadius="60%"
        />
      </ChartCard>

      <ChartCard title="Type Distribution" minHeight={420}>
        <CustomPieChart
          data={coloredPkmnTypesList}
          outerRadius="85%"
          innerRadius="60%"
        />
      </ChartCard>
    </div>
  );
}
