import type RotatedAxisTickProps from "./RotatedAxisTick.models";

/**
 * Custom axis tick component for Recharts that renders rotated text labels.
 *
 * Useful for improving readability when axis labels are long or densely packed,
 * by applying a rotation (e.g. -40 degrees) and positional offsets.
 *
 * @param {number} x - X coordinate provided by Recharts
 * @param {number} y - Y coordinate provided by Recharts
 * @param {number} [dx] - Optional horizontal offset for fine positioning
 * @param {number} [dy] - Optional vertical offset for fine positioning
 * @param {number} [fontSize=14] - Font size of the tick label
 * @param {object} payload - Tick data object containing the label value
 * @param {string} [rotation="rotate(-40)"] - SVG transform rotation applied to the text
 *
 * @returns {JSX.Element} A rotated SVG text element used as a custom axis tick
 */
const RotatedAxisTick = ({
  x,
  y,
  dx,
  dy,
  fontSize = 14,
  payload,
  rotation = "rotate(-40)",
}: RotatedAxisTickProps) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={dx}
        dy={dy}
        fontSize={fontSize}
        textAnchor="end"
        fill="var(--color-gray-charts)"
        transform={rotation}
      >
        {payload?.value}
      </text>
    </g>
  );
};

export default RotatedAxisTick;
