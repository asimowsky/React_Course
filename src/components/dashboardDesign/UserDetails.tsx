import { Button, Popover } from "antd";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  HiOutlineIdentification,
  HiOutlineLogout,
  HiOutlineMail,
  HiOutlineUserCircle,
} from "react-icons/hi";
import "tailwindcss/tailwind.css";
import { useTheme } from "../../utils/hooks/useTheme";

export interface IUserDetailsProps {
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  roles?: string[] | undefined;
  onLogout?: () => void;
  components?: Record<string, any>;
}

export const UserDetails = ({ onLogout }: IUserDetailsProps) => {
  const content = (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-center mb-4 justify-between">
        <div className="flex">
          <HiOutlineUserCircle className="w-6 h-6 mr-2 text-gray-600" />
          <span className="text-lg font-semibold">mert</span>
        </div>
        {/* <LanguageChanger /> */}
      </div>
      <div className="flex mb-4">
        <div className="flex flex-col border-r pr-4 justify-center">
          <div className="flex items-center mb-2">
            <HiOutlineIdentification className="w-5 h-5 mr-2 text-gray-600" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-500">name_C</span>
              <span className="text-gray-700">Name</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <BsFillShieldLockFill className="w-5 h-5 mr-2 text-gray-600" />
          </div>
        </div>

        <div className="ms-4 flex flex-col justify-center">
          <div className="flex items-center mb-2">
            <HiOutlineIdentification className="w-5 h-5 mr-2 text-gray-600" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-500">surname</span>
              <span className="text-gray-700">Surname</span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <HiOutlineMail className="w-5 h-5 mr-2 text-gray-600" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-500">email</span>
              <span className="text-gray-700">Email</span>
            </div>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        icon={<HiOutlineLogout className="w-5 h-5 " />}
        onClick={onLogout}
        className="w-full hover:!bg-gray-600 bg-gray-800"
      >
        logout
      </Button>
    </div>
  );

  const { theme } = useTheme();

  return (
    <Popover content={content} trigger="hover" placement="bottomRight">
      <div className="flex items-center space-x-2 cursor-pointer  rounded-md transition duration-200 p-5">
        <FaUser className="text-xl" style={{ color: theme.token.colorWhite }} />
      </div>
    </Popover>
  );
};
