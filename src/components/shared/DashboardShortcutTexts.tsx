import { Button } from "antd";

export const DashboardShortcutTexts = ({
  text,
  onClick,
}: {
  text: string;
  onClick?: () => void;
}) => {
  return (
    <div className="w-full h-full">
      <Button className="dashboard-shortcut-button" onClick={onClick}>
        {text}
      </Button>
    </div>
  );
};
