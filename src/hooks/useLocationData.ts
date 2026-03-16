import { useEffect, useState } from "react";

import type {
  IBaseLocationData,
  IExtendedLocationData,
} from "../constants/global.constants";
import fetchData from "../services/pokemonApi";

export default function useLocationData() {
  const [locationData, setLocationData] = useState<IExtendedLocationData[]>([]);
  const errorKey = "errorKey";

  useEffect(() => {
    const fetchLocationAreaData = async () => {
      try {
        const json = await fetchData(
          "https://pokeapi.co/api/v2/location-area/?limit=20",
        );

        const multiLocationData: IBaseLocationData[] = json.results.map(
          (locationItem: { name: string; url: string }) => {
            return {
              codeName: locationItem.name,
              url: locationItem.url,
            };
          },
        );

        const finalData: IExtendedLocationData[] = await Promise.all(
          multiLocationData.map(async (singleItem, index) => {
            try {
              const json2 = await fetchData(singleItem.url);

              const extendedData: IExtendedLocationData = {
                ...singleItem,
                enName: json2.names[0].name,
              };

              return extendedData;
            } catch (error) {
              console.log("ERROR ON MAP ", index, ": ", error);
              const a: IExtendedLocationData = {
                codeName: singleItem.codeName,
                url: singleItem.url,
                enName: errorKey,
              };
              return a;
            }
          }),
        );

        const polishedData: IExtendedLocationData[] = finalData.filter(
          (data) => data.enName !== errorKey,
        );

        setLocationData(polishedData);
      } catch (error) {
        console.log("ERROR ON LOCATION-AREA FETCH: ", error);
      }
    };
    fetchLocationAreaData();
  }, []);

  return { locationData, setLocationData };
}
