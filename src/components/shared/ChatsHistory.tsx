import {
  DownOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Menu, Tooltip } from "antd";
import { useState } from "react";
import picasso from "../../assets/Picasso.jpg";
import shakespeare from "../../assets/Shakespear.jpg";
import { ButtonsSwitch } from "./ButtonsSwitch";
import { useTheme } from "../../utils/hooks/useTheme";

export const ChatsHistory = ({ ChatSidebar, username, email }: any) => {
  const [text, setText] = useState("Shakespeare.ai");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const { isDarkMode } = useTheme();

  return (
    <div className="flex h-screen">
      {isSidebarOpen && (
        <div
          className={`w-72 ${
            !isDarkMode ? "bg-gray-900" : "bg-[#384955]"
          } text-white flex flex-col transition-colors duration-500`}
        >
          {/* Toggle Button */}
          <div className="p-4 flex justify-between items-center border-b border-gray-700">
            <h1 className="text_logo flex w-full justify-center">
              <span className="letter letter-1">S</span>
              <span className="letter letter-3">P</span>
              <span className="letter letter-3">A</span>
              <span className="letter letter-4">R</span>
              <span className="letter letter-1">K</span>
              <span className="letter letter-3">Y</span>
              <span className="letter letter-3">.</span>
              <span className="letter letter-2">A</span>
              <span className="letter letter-2">I</span>
            </h1>
          </div>

          {/* Profile Section */}
          <div className="p-4 flex flex-col items-center w-full justify-center border-b border-gray-700">
            <ButtonsSwitch
              avatarSrc={text === "Shakespeare.ai" ? shakespeare : picasso}
              onClickPicasso={() => setText("Picasso.ai")}
              onClickSheak={() => setText("Shakespeare.ai")}
              activeButton={text as any}
            />
          </div>
          <div className="p-4 border-b border-gray-700 flex items-center justify-between">
            <div className="flex items-center">
              <div className="btn_gradient rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold text-white">
                M
              </div>
              <div className="ml-3">
                <div className="text-sm font-semibold">{username}</div>
                <div className="text-xs text-gray-400">{email}</div>
              </div>
            </div>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              className="bg-gray-900"
            >
              <a onClick={(e) => e.preventDefault()} className="text-white">
                <DownOutlined />
              </a>
            </Dropdown>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto mt-2">
            <div className="p-4">
              <h3 className="text-gray-400 mb-2">Today</h3>
              {ChatSidebar.today &&
                ChatSidebar.today.map((chat: any, index: any) => (
                  <div
                    key={index}
                    className="p-2 rounded hover:bg-gray-800 cursor-pointer"
                  >
                    {chat}
                  </div>
                ))}
            </div>
            <div className="p-4">
              <h3 className="text-gray-400 mb-2">Yesterday</h3>
              {ChatSidebar.yesterday &&
                ChatSidebar.yesterday.map((chat: any, index: any) => (
                  <div
                    key={index}
                    className="p-2 rounded hover:bg-gray-800 cursor-pointer"
                  >
                    {chat}
                  </div>
                ))}
            </div>
            <div className="p-4">
              <h3 className="text-gray-400 mb-2">Previous 7 Days</h3>
              {ChatSidebar.previous &&
                ChatSidebar.previous.map((chat: any, index: any) => (
                  <div
                    key={index}
                    className="p-2 rounded hover:bg-gray-800 cursor-pointer"
                  >
                    {chat}
                  </div>
                ))}
            </div>
          </div>

          {/* Add Team Workspace Button */}
          <div className="p-4 border-t border-gray-700 flex justify-center">
            <p className="flex items-center justify-center w-full text-gray-300">
              {text}
            </p>
            <Tooltip title={"Minimize"}>
              <Button
                type="text"
                icon={<MenuUnfoldOutlined />}
                onClick={toggleSidebar}
                className="text-white"
              />
            </Tooltip>
          </div>
        </div>
      )}

      {/* Toggle Button When Sidebar is Closed */}
      {!isSidebarOpen && (
        <div className="text-white bg-gray-900 p-2 flex flex-col h-screen justify-between items-center">
          <div className="flex flex-col items-center w-full gap-5 p-2">
            <div className="text_logo flex justify-center w-full">
              <span className="letter letter-2">A</span>
              <span className="letter letter-2">I</span>
            </div>
          </div>
          <div className="card_sidebar_settings flex justify-center items-center w-full">
            <Tooltip title={"Maximize"}>
              <Button
                type="text"
                icon={
                  <div className="flex justify-center w-full">
                    <MenuUnfoldOutlined />
                  </div>
                }
                onClick={toggleSidebar}
                className="text-white bg-gray-900 p-2"
              />
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
};
