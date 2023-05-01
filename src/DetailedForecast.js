import {
  ResponsiveContainer,
  Area,
  Line,
  CartesianGrid,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { axisStyle, models } from "./constants";
import DayTick from "./DayTick";

const DetailedForecast = ({ data }) => (
  <div className="mb-2">
    <div className="ml-2 mb">
      <h3>Detailed Forecast</h3>
      <div className="info">Median snowfall across our models</div>
    </div>
    <div className="chart-container">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} stroke="#eee" />
          <XAxis dataKey="name" style={axisStyle} tick={DayTick} />
          <YAxis style={axisStyle} tickFormatter={(value) => `${value} in`} />
          <Tooltip />
          {models.map((key) => (
            // Per model areas
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stroke="none"
              fill="#8884d8"
              fillOpacity={0.2}
            />
          ))}
          {/* Median line */}
          <Line
            type="monotone"
            dataKey="median"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DetailedForecast;
