import { Avatar, Button } from "antd";
import { FC } from "react";
import CatImage from "../../assets/Login_Cat.jpg";

interface ButtonsSwitchProps {
  onClickSheak: () => void;
  onClickPicasso: () => void;
  avatarSrc: string;
  activeButton:
    | "Shakespeare.ai"
    | "Picasso.ai"
    | "Kebirasso.ai"
    | "Mertasso.ai";
}

export const AiSelector: FC<ButtonsSwitchProps> = ({
  onClickSheak,
  onClickPicasso,
  avatarSrc,
  activeButton,
}) => {
  return (
    <div className="flex items-center justify-center w-full">
      <Button
        size="large"
        className={`relative left-4 w-[200px] h-[90px]  text-[16px] font-bold pl-2 border-none rounded-r-none  bg-gray-900 text-white ${
          activeButton === "Kebirasso.ai"
            ? "bg-gray-600"
            : "btn_gradient_stable"
        }`}
        onClick={onClickSheak}
      >
        Kebirasso
      </Button>
      <Button
        size="large"
        className={`relative left-4 w-[200px] h-[90px] text-[16px] font-bold pl-2 rounded-l-none bg-gray-900 text-white ${
          activeButton === "Shakespeare.ai"
            ? "bg-gray-600"
            : "btn_gradient_stable"
        }`}
        onClick={onClickSheak}
      >
        Shakespeare
      </Button>

      <Avatar size={160} className="z-10" src={CatImage} />

      <Button
        size="large"
        className={`relative right-4 w-[200px] h-[90px]  text-[16px] font-bold pl-2 border-none rounded-r-none bg-gray-900 text-white ${
          activeButton === "Picasso.ai" ? "bg-gray-600" : "btn_gradient_stable"
        }`}
        onClick={onClickPicasso}
      >
        Picasso
      </Button>
      <Button
        size="large"
        className={`relative right-4 w-[200px] h-[90px] text-[16px] font-bold pl-2 border-none rounded-l-none bg-gray-900 text-white ${
          activeButton === "Mertasso.ai" ? "bg-gray-600" : "btn_gradient_stable"
        }`}
        onClick={onClickPicasso}
      >
        Mertasso
      </Button>
    </div>
  );
};
