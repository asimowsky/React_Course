import { AiSelector } from "./AiSelecotor";
import { DashboardShortcutTexts } from "./DashboardShortcutTexts";

export const CustomDashboard = ({
  handleShortcutClick,
}: {
  handleShortcutClick: (text: string) => void;
}) => {
  return (
    <div className="flex items-center justify-center flex-col gap-10 w-full">
      <div className="w-full pattern_bg flex items-end">
        <div
          className="flex items-end w-full"
          style={{ marginBottom: "-70px" }}
        >
          <AiSelector
            avatarSrc=""
            onClickPicasso={() => "Picasso.ai"}
            onClickSheak={() => "Shakespeare.ai"}
            activeButton={"Shakespeare.ai"}
          />
        </div>
      </div>

      <div className="flex-grow" />

      {/* <div className="flex items-center justify-between gap-4 ">
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
      </div> */}
    </div>
  );
};
