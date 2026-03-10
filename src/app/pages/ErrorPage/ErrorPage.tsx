import { useEffect, useState } from "react";

import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomLineChart from "../../../components/MiscRecharts/CustomLineChart/CustomLineChart";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import CustomRadarChart from "../../../components/MiscRecharts/CustomRadarChart/CustomRadarChart";
import { data1, data2 } from "../../../mock/dummyData";
import { DEFAULT_FEEDBACK_DATA } from "../../../mock/feedbacks";
import { buildRadarData } from "../../../utilities/buildRadarData";

import "./ErrorPage.scss";

export default function ErrorPage() {
  // const radarData = buildRadarData(DEFAULT_FEEDBACK_DATA);

  const [pkmnTypesList, setPkmnTypesList] = useState();
  const [singleData, setSingleData] = useState<any>();
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // const fetchina = async () => {
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/type/");
  //     const jsoned = await response.json();
  //     console.log(jsoned);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };
  interface TypeData {
    name: string;
    url: string;
    value: number;
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
        // const promiseUrl = promise.results.map((r) => r.url);
        const nameUrlArray: TypeData[] = promise.results.map((r: TypeData) => ({
          name: r.name,
          url: r.url,
        }));
        console.log("nameUrlArray: ", nameUrlArray);

        return nameUrlArray;
      })

      .then((nameUrl) => {
        return fetch(`${nameUrl[0].url}`)
          .then((typeResponse) => {
            if (typeResponse) {
              return typeResponse.json();
            }
            throw new Error();
          })
          .then((typePromise) => {
            const numPkmn = typePromise.pokemon.length;
            console.log("typePromise: ", numPkmn);
            const singleData = [{ ...nameUrl[0], value: numPkmn }];
            console.log("singleData: ", singleData);
            setSingleData(singleData);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("AAAAAAAAAAAAAAA: ", singleData);

  return (
    <div className="ErrorPage">
      <h1 className="ErrorPage__title">404 - Not Found</h1>
      <ChartCard title="Sentiment Distribution" minHeight={420}>
        <CustomPieChart data={data2} outerRadius="85%" innerRadius="60%" />
      </ChartCard>

      {/* 
      <ChartCard title="Sentiment Score Trend" minHeight={420}>
        <CustomLineChart data={data1} />
      </ChartCard>

      <ChartCard title="Topic Performance Overview" minHeight={420}>
        <CustomRadarChart data={radarData} />
      </ChartCard> */}
    </div>
  );
}
