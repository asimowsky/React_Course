import { Card } from "antd";

export const InformationCard = ({
  value,
  info,
}: {
  value: string;
  info: string;
}) => (
  <Card className="w-full flex flex-col items-center justify-center bg-[#ebeff5] hover:bg-slate-100 p-2 shadow-lg">
    <p className="text-4xl font-bold text-center">{value}</p>
    <p className="text-lg text-center">{info}</p>
  </Card>
);
