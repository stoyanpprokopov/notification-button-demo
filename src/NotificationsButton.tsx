import React, { useState } from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import { PANEL_CONTAINER_ID } from "./panelUtils";
import { Panel } from "@fluentui/react";

interface INotificationsButtonProps {}

export default function NotificationsButton({}: INotificationsButtonProps) {
  const [isOpen, setOpen] = useState(false);

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
        if (isOpen) {
          setOpen(false);
        }

        setOpen(true);
      }}
    >
      <Panel
        layerProps={{ hostId: PANEL_CONTAINER_ID }}
        isOpen={isOpen}
        headerText="Notifications panel"
        onDismiss={() => setOpen(false)}
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
