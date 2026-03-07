const RotatedAxisTick = ({
  x,
  y,
  payload,
  rotation = "rotate(-40)",
}: {
  x?: number | string;
  y?: number | string;
  payload?: { value: string };
  rotation: string;
}) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform={rotation}
      >
        {payload?.value}
      </text>
    </g>
  );
};

export default RotatedAxisTick;
