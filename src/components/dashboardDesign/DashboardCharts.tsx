import { ChartCard } from "./ChartCard";
import { DonutChart } from "./DonutChart";
import { EmptyCard } from "./EmptyCard";
import { GenderChart } from "./GenderChart";
import { HiresChart } from "./HiresChart";
import { InformationCard } from "./InformationCard";
import { Maps } from "./Maps";
import { Rates } from "./Rates";

const data = [
  { value: "513", info: "EMPLOYEES COUNT" },
  { value: "$21,365,405", info: "SALARIES" },
  { value: "$1,972,209", info: "TOTAL BONUS" },
  { value: "62", info: "NEW HIRES" },
  { value: "37", info: "AVERAGE AGE" },
  { value: "11 months", info: "AVERAGE SENIORITY" },
];

const rateData = [
  { rate: "9.3%", rateName: "TURNOVER RATE" },
  { rate: "0.4%", rateName: "ABSENTEEISM RATE" },
];

export const sampleTopology = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "United States" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-100.0, 40.0],
            [-105.0, 40.0],
            [-105.0, 45.0],
            [-100.0, 45.0],
            [-100.0, 40.0],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: { name: "Canada" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-110.0, 50.0],
            [-115.0, 50.0],
            [-115.0, 55.0],
            [-110.0, 55.0],
            [-110.0, 50.0],
          ],
        ],
      },
    },
    // Add more regions as needed
  ],
};

export const DashboardCharts = () => {
  return (
    <div className="w-full h-[calc(100vh-4rem)] p-3 flex flex-col">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {data.map((item, index) => (
          <InformationCard key={index} value={item.value} info={item.info} />
        ))}
      </div>
      <div className="grid grid-cols-6 pt-3 gap-3 h-2/7 ">
        <div className="col-span-6 md:col-span-2 sm:col-span-3 ">
          <ChartCard />
        </div>
        <div className="col-span-6 md:col-span-2 sm:col-span-3">
          <GenderChart />
        </div>
        <div className="col-span-6 md:col-span-1 sm:col-span-3">
          <DonutChart />
        </div>
        <div className="col-span-6 md:col-span-1 sm:col-span-3">
          <Rates rates={rateData} />
        </div>
      </div>
      <div className="grid grid-cols-6 pt-3 gap-3 flex-grow h-3/5">
        <div className="col-span-6 md:col-span-4 sm:col-span-3 h-full">
          <Maps />
        </div>
        <div className="col-span-6 md:col-span-2 sm:col-span-3 h-full">
          <div className="flex flex-col h-full gap-3">
            <div className="h-3/3 md:h-2/3">
              <HiresChart />
            </div>
            <div className="h-3/3 md:h-1/3">
              <EmptyCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
