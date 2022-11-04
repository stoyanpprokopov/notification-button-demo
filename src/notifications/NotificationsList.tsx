import React from "react";
import { IEvent } from "../data/events";
import NotificationEvent from "./NotificationEvent";

interface INotificationsListProps {
  events: IEvent[];
}

export default function NotificationsList({ events }: INotificationsListProps) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginLeft: "auto",
          cursor: "pointer",
          color: "blue",
        }}
      >
        Dismiss All
      </div>

      <div
        style={{
          marginTop: "8px",
          width: "100%",
          height: "1px",
          borderBottom: "1px solid #dddddd",
        }}
      />

      {events.map((event) => (
        <NotificationEvent key={event.id} event={event} />
      ))}
    </div>
  );
}
