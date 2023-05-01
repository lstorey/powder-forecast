import "./App.css";
import BestDays from "./BestDays";
import DetailedForecast from "./DetailedForecast";
import PowderIndex from "./PowderIndex";
import { barData, bestDaysData, lineData } from "./constants";

function App() {
  return (
    <div className="App">
      <BestDays data={bestDaysData} />
      <PowderIndex data={barData} />
      <DetailedForecast data={lineData} />
    </div>
  );
}

export default App;
