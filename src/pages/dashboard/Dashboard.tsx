import { ChatsHistory } from "../../components/shared/ChatsHistory";
import { Picasso } from "../../components/shared/Picasso";

export const Dashboard = () => {
  const ChatSidebar = {
    today: ["Today's search"],
    yesterday: ["Frozen Boot Screen Fix"],
    previous: [
      "React TypeScript ChatGPT",
      "Select Component Update Guide",
      "Extend DocumentType Service",
      "Steps Component Card Titles",
      "Remove Header Corner Border",
      "Tailwind CSS Troubleshooting Guide",
      "Clients Bar Chart Permission",
    ],
  };

  return (
    <div className="flex w-full h-full">
      <div>
        <ChatsHistory ChatSidebar={ChatSidebar} />
      </div>
      <div className="w-full">
        <Picasso />
      </div>
    </div>
  );
};
