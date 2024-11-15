import { useState } from "react";
import { Button, Card } from "antd";
import ReactApexChart from "react-apexcharts";

export const HiresChart = () => {
  const [view, setView] = useState("Turnover");

  const chartOptions = {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: { show: false },
    },
    colors: ["#FFA726", "#64B5F6"], // Orange for New Hires, Blue for Leaving
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => Math.abs(val),
      offsetY: -5,
      style: {
        fontSize: "12px",
        colors: ["#333"],
      },
    },
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#333"],
        },
      },
    },
    yaxis: {
      title: {
        text: view === "Turnover" ? "Turnover" : "Headcount",
        style: {
          fontSize: "14px",
          color: "#333",
        },
      },
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#333"],
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      markers: {
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
      },
      labels: {
        colors: ["#333"],
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${Math.abs(val)} employees`,
      },
    },
  };

  const chartSeries = [
    {
      name: "New Hires",
      data: [51, 20, 36, 32, 36, 12],
    },
    {
      name: "Leaving",
      data: [-18, -3, -10, -7, -7, -4],
    },
  ];

  return (
    <Card className="md:relative md:w-full md:flex  bg-[#ebeff5] hover:bg-slate-100 p-4 rounded-lg h-full shadow-lg">
      <ReactApexChart
        options={chartOptions as any}
        series={chartSeries}
        type="bar"
        height="100%"
      />
      <div className="flex flex-col items-center mb-4 md:absolute md:top-20 md:right-4 h-full gap-">
        <span className="text-gray-700 font-semibold">
          NEW HIRES VS. LEAVING VARIATION
        </span>
        <div className="flex md:flex-col gap-3">
          <Button
            onClick={() => setView("Turnover")}
            className={
              view === "Turnover" ? "bg-gray-300 font-semibold" : "bg-white"
            }
          >
            TURNOVER
          </Button>
          <Button
            onClick={() => setView("Headcount")}
            className={
              view === "Headcount" ? "bg-gray-300 font-semibold" : "bg-white"
            }
          >
            HEADCOUNT
          </Button>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <div className="flex items-center">
            <span className="w-3 h-3 mr-2 bg-[#FFA726]"></span>
            <span className="text-gray-700 font-medium">NEW HIRES</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 mr-2  bg-[#64B5F6]"></span>
            <span className="text-gray-700 font-medium">LEAVING</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
