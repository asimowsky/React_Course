import { Card } from "antd";
import { ApexOptions } from "apexcharts"; // Import ApexOptions type
import Chart from "react-apexcharts";

export const DonutChart = ({ className }: { className?: string }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["FULL-TIME", "PART-TIME"],
    colors: ["#8AB6D6", "#FFB200"],
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(0)}%`,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        colors: ["#000"],
      },
    },
    legend: {
      position: "right",
      horizontalAlign: "center",
      offsetY: 10,
      fontSize: "14px",
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val}%`,
      },
    },
    title: {
      text: "EMPLOYMENT STATUS",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
  };

  const chartSeries = [87, 13]; // Full-time 87%, Part-time 13%

  return (
    <Card
      className={`w-full flex flex-col items-center bg-[#ebeff5] hover:bg-slate-100 p-4 rounded-lg ${className} flex-grow-1 h-full shadow-lg`}
    >
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        height="100%"
        width="100%"
      />
    </Card>
  );
};
