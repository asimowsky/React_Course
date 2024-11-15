import "ag-charts-enterprise";
import { AgChartOptions } from "ag-charts-enterprise";
import { AgCharts } from "ag-charts-react";
import { useState } from "react";
import { data } from "./data/data";
import { topology } from "./data/topology";
import { Card } from "antd";

export const Maps = () => {
  const [options] = useState<AgChartOptions>({
    data,
    topology,
    series: [
      {
        type: "map-shape-background",
        stroke: "",
      },
      {
        type: "map-shape",
        title: "Access to Clean Fuels",
        idKey: "name",
        colorKey: "value",
        colorName: "% of population",
      },
    ],
    gradientLegend: {
      enabled: true,
      position: "right",
      gradient: {
        preferredLength: 600,
        thickness: 5,
      },
      scale: {
        label: {
          fontSize: 16,
          formatter: (p) => p.value + "%",
        },
      },
    },
  });
  return (
    <Card className="w-full flex flex-col items-center bg-[#ebeff5] hover:bg-slate-100 p-4 rounded-lg h-full justify-center shadow-lg">
      <AgCharts options={options as any} />
    </Card>
  );
};
