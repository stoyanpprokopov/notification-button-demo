import React from "react";
import { EEventStatus, IEvent } from "../data/events";
import moment from "moment";
import NotificationEventHeader from "./NotificationEventHeader";

interface INotificationEventProps {
  event: IEvent;
  onDismiss: (id: string) => void;
}

export default function NotificationEvent({
  event,
  onDismiss,
}: INotificationEventProps) {
  return (
    <div
      style={{
        marginTop: "8px",
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        borderBottom: "1px solid #dddddd",
        paddingBottom: "8px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 8,
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => onDismiss(event.id)}
      >
        &#10006;
      </div>
      <NotificationEventHeader
        status={event.status}
        title={event.title}
        description={event.description}
      />
      <div
        style={{
          marginTop: "12px",
          marginLeft: "auto",
        }}
      >
        {moment(event.dateCreated).fromNow()}
      </div>
    </div>
  );
}
