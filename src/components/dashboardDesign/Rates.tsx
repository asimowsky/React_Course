import { Card } from "antd";

interface IRateData {
  rate?: string;
  rateName?: string;
}

export const Rates = ({
  rates,
  className,
}: {
  rates: IRateData[];
  className?: string;
}) => {
  return (
    <Card
      className={`h-full flex flex-col justify-center bg-[#ebeff5] hover:bg-slate-100 shadow-lg ${className}`}
    >
      {rates.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <p className="text-4xl font-bold text-center">{item.rate}</p>
          <p className="text-lg text-center">{item.rateName}</p>
        </div>
      ))}
    </Card>
  );
};
