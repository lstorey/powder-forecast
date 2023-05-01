import { axisStyle, weekdays } from "./constants";
import {
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const PowderIndex = ({ data }) => {
  return (
    <div className="mb-2">
      <div className="ml-2 mb">
        <h3>Powder Index</h3>
        <div className="info">
          Predicted snowfall from the previous night and current day
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#eee" />
            <XAxis
              dataKey="name"
              style={axisStyle}
              tickFormatter={(i) => weekdays[i % weekdays.length]}
            />
            <YAxis style={axisStyle} tickFormatter={(value) => `${value} in`} />
            <Tooltip />
            <Bar dataKey="median" fill="#8884d8" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PowderIndex;
