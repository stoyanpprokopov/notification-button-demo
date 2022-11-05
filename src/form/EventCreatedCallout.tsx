import { Callout, DelayedRender, mergeStyleSets, Text } from "@fluentui/react";
import React from "react";
import { IEvent } from "../data/events";
import NotificationEventHeader from "../notifications/NotificationEventHeader";
import { NOTIFICATIONS_BUTTON_ID } from "../notifications/panelUtils";

interface IEventCreatedCalloutProps {
  event: IEvent;
  setShowCallout: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function EventCreatedCallout({
  event,
  setShowCallout,
}: IEventCreatedCalloutProps) {
  return (
    <Callout
      className={styles.callout}
      target={`#${NOTIFICATIONS_BUTTON_ID}`}
      onDismiss={() => setShowCallout(false)}
      role="alert"
    >
      <DelayedRender>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <NotificationEventHeader
            status={event.status}
            title={event.title}
            description={event.description}
          />
        </div>
      </DelayedRender>
    </Callout>
  );
}

const styles = mergeStyleSets({
  button: {
    width: 130,
  },
  callout: {
    width: 320,
    padding: "20px 24px",
  },
});
