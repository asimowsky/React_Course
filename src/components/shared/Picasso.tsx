import { Button } from "antd";
import { FormEvent, useState } from "react";
import { FiSend } from "react-icons/fi";
import { IMessageType } from "../../types/picassoMesages/IMessageTypes";
import { useTheme } from "../../utils/hooks/useTheme";
import { CustomDashboard } from "./CustomDashboard";
import TextArea from "antd/es/input/TextArea";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { DashboardShortcutTexts } from "./DashboardShortcutTexts";

export const Picasso = () => {
  const [messages, setMessages] = useState<IMessageType[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isDashboardVisible, setIsDashboardVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (
    e?: FormEvent | React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) e.preventDefault();
    if (inputValue.trim() && !loading) {
      setLoading(true);
      setMessages((prev) => [...prev, { role: "user", content: inputValue }]);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "I cannot help you at this moment; you are smarter than me!",
          },
        ]);
        setLoading(false);
      }, 1000);
      setInputValue("");
      setIsDashboardVisible(false);
    }
  };

  const handleShortcutClick = (text: string) => {
    if (!loading) setInputValue(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !loading) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const { theme, isDarkMode } = useTheme();
  const backgroundColor = isDarkMode ? "#F0F8FF" : theme.token.colorSecondary;

  return (
    <div
      className="w-full h-full text-white"
      style={{
        backgroundColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <div className="absolute z-[0] w-[100%] h-[30%] -right-[0%] rounded-full blue__gradient bottom-40" />

      <DarkModeSwitch />
      <div
        className="flex w-full flex-col px-20 overflow-hidden"
        style={{
          height: "75vh",
        }}
      >
        <div className="flex items-center w-full">
          {isDashboardVisible && (
            <CustomDashboard handleShortcutClick={handleShortcutClick} />
          )}
        </div>

        <div
          className="flex-grow overflow-y-auto"
          style={{
            maxHeight: "100%",
            paddingRight: "1rem",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } mb-2`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  msg.role === "user" ? "bg-blue-500" : "bg-gray-700"
                }`}
                style={{
                  maxWidth: "45%",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <DashboardShortcutTexts
          text="Can this AI help with scheduling and reminders?"
          onClick={() =>
            handleShortcutClick(
              "Can this AI help with scheduling and reminders?"
            )
          }
        />
        <DashboardShortcutTexts
          text="What are effective ways to set and achieve goals?"
          onClick={() =>
            handleShortcutClick(
              "What are effective ways to set and achieve goals?"
            )
          }
        />
        <DashboardShortcutTexts
          text="Generate an illustration of a cozy coffee shop."
          onClick={() =>
            handleShortcutClick(
              "Generate an illustration of a cozy coffee shop."
            )
          }
        />
      </div>
      <div className="flex w-full justify-center items-end p-2">
        <form onSubmit={handleSubmit} className="flex w-[60%]">
          <TextArea
            placeholder={
              loading
                ? "Waiting for assistant's reply..."
                : "Type your message..."
            }
            className="flex-grow border rounded-l-md rounded-r-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            autoSize={{ minRows: 1, maxRows: 2 }}
            style={{
              resize: "none",
              overflow: "auto",
            }}
          />
          <Button
            type="link"
            className={`p-2 text-white h-full rounded-r-md rounded-l-none ${
              loading ? "btn_gradient_disabled" : "btn_gradient"
            }`}
            onClick={handleSubmit}
            disabled={loading}
            style={{
              backgroundColor: loading ? "#d3d3d3" : "#1890ff",
              color: loading ? "#808080" : "white",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            <FiSend />
          </Button>
        </form>
      </div>
    </div>
  );
};
