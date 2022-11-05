import React, { useState } from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import { NOTIFICATIONS_PANEL_CONTAINER_ID } from "./panelUtils";
import { Panel } from "@fluentui/react";
import { IEvent, IEventsProps } from "../data/events";
import NotificationsList from "./NotificationsList";
import NotDismissedCounter from "./NotDismissedCounter";
import eventsTestData from "../data/eventsTestData";

interface INotificationsButtonProps extends IEventsProps {}

export default function NotificationsButton({
  events,
  setEvents,
}: INotificationsButtonProps) {
  const [isOpen, setOpen] = useState(false);
  const eventsToShow = events.filter((event) => !event.dismissed);
  const showCounter = !isOpen && eventsToShow.length > 0;

  const onDismiss = (id: string) => {
    const result = events.map((event) => {
      if (event.id === id) {
        return { ...event, dismissed: true };
      }

      return event;
    });

    setEvents(result);
  };

  const dismissAll = (eventIds: string[]) => {
    const result = events.map((event) => {
      if (eventIds.includes(event.id)) {
        return { ...event, dismissed: true };
      }
      return event;
    });

    setEvents(result);
  };

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
        onDismiss={() => {
          setOpen(false);
          dismissAll(eventsToShow.map((event) => event.id));
        }}
        isLightDismiss={true}
        focusTrapZoneProps={{
          isClickableOutsideFocusTrap: true,
          forceFocusInsideTrap: false,
        }}
      >
        <NotificationsList
          events={eventsToShow}
          onDismiss={onDismiss}
          onDismissAll={() => dismissAll(eventsToShow.map((event) => event.id))}
        />
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
