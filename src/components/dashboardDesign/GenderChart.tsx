import { Card } from "antd";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export const GenderChart = ({ className }: { className?: string }) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    colors: ["#8AB6D6", "#FFB200"],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["20-30", "30-40", "40-50", "50+"],
      title: {
        text: "Age Group",
      },
      labels: {
        formatter: (val) => Math.abs(val as unknown as number).toString(), // First cast to 'unknown', then to 'number'
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
      labels: {
        show: true,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
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
        formatter: (val) => `${Math.abs(val)}%`,
      },
    },
    title: {
      text: "AGE GROUP & GENDER",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
  };

  const chartSeries = [
    {
      name: "MEN",
      data: [-20, -30, -40, -50],
    },
    {
      name: "WOMEN",
      data: [20, 30, 40, 50],
    },
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
