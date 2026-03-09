// import type { IRechartsData } from "../components/MiscRecharts/CustomLineChart/CustomLineChart.models";

// // Convert values to numbers and ignore null/invalid
// export default function addPercentagesSafe(data: IRechartsData[]) {
// const toNumberSafe = (value: number | string | null) => {
//   const num = Number(data.value);
//   return isNaN(num) ? 0 : num;
// };

// export function getPercentage(value: number | string | null, data: IRechartsData[]) {
//   const numericValue = toNumberSafe(value);
//   const total = data.reduce((sum, item) => sum + toNumberSafe(item.value), 0);
//   const percentage = total > 0 ? (numericValue / total) * 100 : 0;
// return percentage;
// }
