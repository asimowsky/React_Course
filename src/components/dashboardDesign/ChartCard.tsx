import { Card } from "antd";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import ApexOptions type

export const ChartCard = ({ className }: { className?: string }) => {
  const chartOptions: ApexOptions = {
    // Explicitly type as ApexOptions
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
      },
    },
    colors: ["#FFB200", "#FFD580", "#8AB6D6", "#A3D3F2"],
    dataLabels: {
      enabled: true,
      formatter: (val: any) => `${val}%`,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#000"],
      },
      offsetX: -10,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: ["TOTAL"],
      labels: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "TOTAL",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      offsetY: 10,
    },
    tooltip: {
      y: {
        formatter: (val: any) => `${val}%`,
      },
    },
    title: {
      text: "EMPLOYMENT CONTRACT TYPE",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const chartSeries = [
    { name: "PERMANENT", data: [79] },
    { name: "TEMPORARY", data: [9] },
    { name: "EXTERNAL PROVIDERS", data: [8] },
    { name: "INTERNSHIP", data: [7] },
  ];

  return (
    <Card
      className={`w-full flex flex-col items-center bg-[#ebeff5] hover:bg-slate-100 p-4 rounded-lg shadow-lg ${className}`}
    >
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="100%"
        width="100%"
      />
    </Card>
  );
};
