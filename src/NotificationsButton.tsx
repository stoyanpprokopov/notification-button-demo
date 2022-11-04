import React from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import { IPanelControlProps } from "./panelControlProps";

interface INotificationsButtonProps extends IPanelControlProps {}

export default function NotificationsButton({
  isPanelOpen,
  showPanel,
  dismissPanel,
}: INotificationsButtonProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "60px",
        width: "60px",
        cursor: "pointer",
      }}
      onClick={() => {
        if (isPanelOpen) {
          dismissPanel();
        }

        showPanel();
      }}
    >
      <RingerIcon
        style={{
          height: "40px",
          width: "40px",
          color: "white",
        }}
      />
    </div>
  );
}
