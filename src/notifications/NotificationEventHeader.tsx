import { Spinner } from "@fluentui/react";
import React from "react";
import { EEventStatus } from "../data/events";

interface INotificationEventHeader {
  status: EEventStatus;
  title: string;
  description: string;
}

export default function NotificationEventHeader({
  status,
  title,
  description,
}: INotificationEventHeader) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          fontSize: "16px",
          fontWeight: 600,
        }}
      >
        {status === EEventStatus.IN_PROGRESS && (
          <Spinner
            label={`${title} is in progress`}
            ariaLive="assertive"
            labelPosition="right"
          />
        )}
        {status === EEventStatus.COMPLETED && (
          <div
            style={{
              color: status === EEventStatus.COMPLETED ? "green" : "black",
            }}
          >
            ✓ {title} is completed
          </div>
        )}
      </div>
      <div
        style={{
          marginTop: "10px",
        }}
      >
        {description}
      </div>
    </>
  );
}
