import type { LabelProps } from "recharts";

/**
 * Custom label component for Recharts that renders a value below a chart element.
 *
 * The label is centered horizontally and offset slightly
 * downward using `dy` for better visual spacing.
 *
 * @param {number} x - X coordinate provided by Recharts for label positioning
 * @param {number} y - Y coordinate provided by Recharts for label positioning
 * @param {string} stroke - Color passed from the chart element (used as text color)
 * @param {string | number} value - The value to display inside the label
 * @param {string} fontSize - The label font size
 *
 * @returns {JSX.Element} An SVG text element representing the customized label
 */

const CustomizedLabel = ({ x, y, stroke, value, fontSize }: LabelProps) => {
  return (
    <text
      x={x}
      y={y}
      dy={22}
      fill={stroke}
      fontSize={fontSize}
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

export default CustomizedLabel;
