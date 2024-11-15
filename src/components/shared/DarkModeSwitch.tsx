import { useTheme } from "../../utils/hooks/useTheme";

export const DarkModeSwitch = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex w-full justify-end p-7">
      <label className="switch">
        <input
          type="checkbox"
          className="input__check"
          onChange={toggleTheme}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};
