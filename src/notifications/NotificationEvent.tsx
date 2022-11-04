import React from "react";
import { EEventStatus, IEvent } from "../data/events";
import moment from "moment";

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {event.status === EEventStatus.IN_PROGRESS && <div>...</div>}
        {event.status === EEventStatus.COMPLETED && <div>✓</div>}
        <div
          style={{
            marginLeft: "16px",
            color: event.status === EEventStatus.COMPLETED ? "green" : "black",
          }}
        >
          {event.title}
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        {event.description}
      </div>
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
