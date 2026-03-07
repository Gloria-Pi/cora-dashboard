import type { LabelProps } from "recharts";

const CustomizedLabel = ({ x, y, stroke, value }: LabelProps) => {
  return (
    <text x={x} y={y} dy={18} fill={stroke} fontSize={12} textAnchor="middle">
      {value}
    </text>
  );
};

export default CustomizedLabel;
