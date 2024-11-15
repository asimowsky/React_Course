import { Avatar, Button } from "antd";
import { FC } from "react";

interface ButtonsSwitchProps {
  onClickSheak: () => void;
  onClickPicasso: () => void;
  avatarSrc: string;
  activeButton: "Shakespeare.ai" | "Picasso.ai";
}

export const ButtonsSwitch: FC<ButtonsSwitchProps> = ({
  onClickSheak,
  onClickPicasso,
  avatarSrc,
  activeButton,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Button
        size="large"
        className={`relative left-3 w-[100px] text-[12px] font-bold pl-1 border-none  ${
          activeButton === "Shakespeare.ai"
            ? "btn_gradient_animated"
            : "btn_gradient_stable"
        }`}
        onClick={onClickSheak}
      >
        Shakespeare
      </Button>

      <Avatar size={100} className="z-10" src={avatarSrc} />

      <Button
        size="large"
        className={`relative right-3 w-[100px] text-[12px] font-bold pl-1 border-none  ${
          activeButton === "Picasso.ai"
            ? "btn_gradient_animated"
            : "btn_gradient_stable"
        }`}
        onClick={onClickPicasso}
      >
        Picasso
      </Button>
    </div>
  );
};
