import type { PhosphorWeightType } from "../../../constants/global.constants";

export default interface RotatingCaretDownProps {
  condition: boolean;
  size?: number;
  weight?: PhosphorWeightType;
  parentClass?: string;
}
