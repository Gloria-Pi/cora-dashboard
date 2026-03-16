// interface IChartData {
//   name: string;
//   value: string | number;
// }

export default function fillDataWithColor(
  data: IChartData[],
  colors: string[],
) {
  return data.map((d, i) => ({
    name: d.name,
    value: d.value,
    fill: colors[i],
  }));
}
