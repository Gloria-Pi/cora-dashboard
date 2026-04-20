import { capitalizeWord } from "../../../utilities/formatters.utils";

import type FilterSelectProps from "./FilterSelect.models";
import "./FilterSelect.scss";

export default function FilterSelect<T extends string>({
  name,
  value,
  setValue,
  label,
  options,
}: FilterSelectProps<T>) {
  return (
    <div className="FilterSelect">
      <select
        name={name}
        value={value}
        aria-label={`Filter by ${name}`}
        onChange={(e) => setValue(e.target.value as T)}
      >
        <option value="">{label}</option>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {capitalizeWord(opt)}
          </option>
        ))}
      </select>
    </div>
  );
}
