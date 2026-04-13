export default interface FilterSelectProps<T extends string> {
  name: string;
  value: T | "";
  setValue: React.Dispatch<React.SetStateAction<T | "">>;
  label: string;
  options: T[];
}
