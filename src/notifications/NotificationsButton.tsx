import React, { useState } from "react";
import { RingerIcon } from "@fluentui/react-icons-mdl2";
import {
  NOTIFICATIONS_BUTTON_ID,
  NOTIFICATIONS_PANEL_CONTAINER_ID,
} from "./panelUtils";
import { mergeStyles, Panel, ProgressIndicator } from "@fluentui/react";
import { EEventStatus, IEvent, IEventsProps } from "../data/events";
import NotificationsList from "./NotificationsList";
import NotDismissedCounter from "./NotDismissedCounter";

interface INotificationsButtonProps extends IEventsProps {}

export default function NotificationsButton({
  events,
  setEvents,
}: INotificationsButtonProps) {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const eventsToShow = events.filter((event) => !event.dismissed);
  const showCounter = !isPanelOpen && eventsToShow.length > 0;

  const showProgressIndicator =
    eventsToShow.filter((event) => event.status !== EEventStatus.COMPLETED)
      .length > 0;

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
      id={NOTIFICATIONS_BUTTON_ID}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "60px",
        cursor: "pointer",
        backgroundColor: isPanelOpen ? "white" : "transparent",
        position: "relative",
      }}
      onClick={() => {
        if (isPanelOpen) {
          setPanelOpen(false);
        }

        setPanelOpen(true);
      }}
    >
      <Panel
        layerProps={{ hostId: NOTIFICATIONS_PANEL_CONTAINER_ID }}
        isOpen={isPanelOpen}
        headerText="Notifications panel"
        onDismiss={() => {
          setPanelOpen(false);
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

      {!showProgressIndicator && (
        <RingerIcon
          style={{
            height: "40px",
            width: "40px",
            color: isPanelOpen ? "black" : "white",
          }}
        />
      )}

      {showProgressIndicator && (
        <ProgressIndicator
          label={
            <RingerIcon
              style={{
                height: "40px",
                width: "40px",
                color: isPanelOpen ? "black" : "white",
              }}
            />
          }
        />
      )}

      {showCounter && <NotDismissedCounter count={eventsToShow.length} />}
    </div>
  );
}
