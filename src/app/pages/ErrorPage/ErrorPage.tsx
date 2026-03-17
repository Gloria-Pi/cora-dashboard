import ChartCard from "../../../components/Cards/ChartCard/ChartCard";
import CustomPieChart from "../../../components/MiscRecharts/CustomPieChart/CustomPieChart";
import useEncounterData from "../../../hooks/useEncounterData";
import useLocationData from "../../../hooks/useLocationData";
import PIE_COLORS from "../../../styles/constants";
import fillDataWithColor from "../../../utilities/fillChartWithColors";

import "./ErrorPage.scss";

export default function ErrorPage() {
  const { locationData } = useLocationData();
  const { selectedLocation, setSelectedLocation, encounterablePkmn } =
    useEncounterData();

  const pkmnEncounterPercentage = fillDataWithColor(
    encounterablePkmn.map((p) => ({
      name: p.pokemon,
      value: p.encounterChance,
    })),
    PIE_COLORS,
  );

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
