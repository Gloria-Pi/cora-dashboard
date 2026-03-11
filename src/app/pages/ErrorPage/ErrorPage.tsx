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

  const [pkmnTypesList, setPkmnTypesList] = useState<TypeData[]>([]);

  interface TypeData {
    name: string;
    url: string;
    value: number | string;
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type")
      .then((response) => {
        if (response) {
          console.log("response: ", response);
          return response.json();
        }
        throw new Error();
      })
      .then((promise) => {
        const nameUrlArray: TypeData[] = promise.results.map((r: TypeData) => ({
          name: r.name,
          url: r.url,
        }));
        console.log("nameUrlArray: ", nameUrlArray);

        return nameUrlArray;
      })

      .then((nameUrlArray) => {
        nameUrlArray.map((item) =>
          fetch(`${item.url}`)
            .then((typeResponse) => {
              if (typeResponse) {
                return typeResponse.json();
              }
              throw new Error();
            })
            .then((typePromise) => {
              const numPkmn = typePromise.pokemon.length;
              const singleDataItem = { ...item, value: numPkmn };
              setPkmnTypesList((prev) => [...prev, singleDataItem]);
            }),
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("LISTA TIPI: ", pkmnTypesList);

  const coloredPkmnTypesList = pkmnTypesList.map((item, index) => ({
    ...item,
    fill: PIE_COLORS[index],
  }));

  console.log("LISTINA: ", coloredPkmnTypesList);

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>
      <ChartCard title="Sentiment Distribution" minHeight={420}>
        <CustomPieChart
          data={coloredPkmnTypesList}
          outerRadius="85%"
          innerRadius="60%"
        />
      </ChartCard>
    </div>
  );
}
