import React from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import { PANEL_CONTAINER_ID } from "./panelUtils";
import { Panel } from "@fluentui/react";
import { useBoolean } from "@fluentui/react-hooks";

interface INotificationsButtonProps {}

export default function NotificationsButton({}: INotificationsButtonProps) {
  const [isPanelOpen, { setTrue: showPanel, setFalse: dismissPanel }] =
    useBoolean(false);

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
      <Panel
        layerProps={{ hostId: PANEL_CONTAINER_ID }}
        isOpen={isPanelOpen}
        headerText="Notifications panel"
        onDismiss={dismissPanel}
        isLightDismiss={true}
        focusTrapZoneProps={{
          isClickableOutsideFocusTrap: true,
          forceFocusInsideTrap: false,
        }}
      >
        TODO
      </Panel>
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
