import { useTheme } from "../../utils/hooks/useTheme";

export const Shakespeare = () => {
  const { theme } = useTheme();

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: theme.token.colorDimmed }}
    >
      Shakespeare
    </div>
  );
};
