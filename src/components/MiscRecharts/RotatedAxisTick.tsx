const RotatedAxisTick = ({
  x,
  y,
  dx,
  dy,
  fontSize = 14,
  payload,
  rotation = "rotate(-40)",
}: {
  x?: number | string;
  y?: number | string;
  dx?: number | string;
  dy?: number | string;
  fontSize?: number;
  payload?: { value: string };
  rotation: string;
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={dx} //horizontal offset
        dy={dy} //vertical offset
        fontSize={fontSize}
        textAnchor="end"
        fill="#818589"
        transform={rotation} // e.g. "rotate(-40)"
      >
        {payload?.value}
      </text>
    </g>
  );
};

export default RotatedAxisTick;
