import React from "react";
import HeaderLogo from "./HeaderLogo";
import NotificationsButton from "../notifications/NotificationsButton";
import { IEvent, IEventsProps } from "../data/events";

interface IHeaderProps extends IEventsProps {}

export default function Header({ events, setEvents }: IHeaderProps) {
  return (
    <div
      style={{
        height: "80px",
        width: "100%",
        backgroundColor: "#2f3844",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <HeaderLogo />
        <NotificationsButton events={events} setEvents={setEvents} />
      </div>
    </div>
  );
}
