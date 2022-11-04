import React, { useState } from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import { NOTIFICATIONS_PANEL_CONTAINER_ID } from "./panelUtils";
import { Panel } from "@fluentui/react";
import { IEvent } from "../data/events";
import NotificationsList from "./NotificationsList";
import NotDismissedCounter from "./NotDismissedCounter";
import eventsTestData from "../data/eventsTestData";

interface INotificationsButtonProps {
  events: IEvent[];
}

export default function NotificationsButton({
  events,
}: INotificationsButtonProps) {
  const [isOpen, setOpen] = useState(false);
  const notDismissedCount = events.filter((event) => !event.dismissed).length;
  const showCounter = !isOpen && notDismissedCount > 0;

  const onDismiss = (id: string) => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "60px",
        cursor: "pointer",
        backgroundColor: isOpen ? "white" : "transparent",
        position: "relative",
      }}
      onClick={() => {
        if (isOpen) {
          setOpen(false);
        }

        setOpen(true);
      }}
    >
      <Panel
        layerProps={{ hostId: NOTIFICATIONS_PANEL_CONTAINER_ID }}
        isOpen={isOpen}
        headerText="Notifications panel"
        onDismiss={() => setOpen(false)}
        isLightDismiss={true}
        focusTrapZoneProps={{
          isClickableOutsideFocusTrap: true,
          forceFocusInsideTrap: false,
        }}
      >
        <NotificationsList events={events} />
      </Panel>

      <RingerIcon
        style={{
          height: "40px",
          width: "40px",
          color: isOpen ? "black" : "white",
        }}
      />

      {showCounter && <NotDismissedCounter count={events.length} />}
    </div>
  );
}
