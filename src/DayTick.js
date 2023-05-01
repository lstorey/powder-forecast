import { axisStyle, weekdays } from "./constants";

const DayTick = ({ x, y, payload }) => {
  const i = payload.value;
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} fill="#666" style={axisStyle}>
        <tspan textAnchor="middle" x="0">
          {weekdays[Math.floor(payload.value / 2) % weekdays.length]}
        </tspan>
        <tspan textAnchor="middle" x="0" dy="10">
          {i % 2 === 0 ? "Day" : "Night"}
        </tspan>
      </text>
    </g>
  );
};

export default DayTick;
