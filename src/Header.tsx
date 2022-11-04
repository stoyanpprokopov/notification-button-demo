import React from "react";
import HeaderLogo from "./HeaderLogo";
import NotificationsButton from "./NotificationsButton";

interface IHeaderProps {}

export default function Header({}: IHeaderProps) {
  return (
    <div
      style={{
        minHeight: "80px",
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
          padding: "10px 8px",
        }}
      >
        <HeaderLogo />
        <NotificationsButton />
      </div>
    </div>
  );
}
