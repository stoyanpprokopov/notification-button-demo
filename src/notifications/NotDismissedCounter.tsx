import React from "react";

interface INotDismissedCounterProps {
  count: number;
}

export default function NotDismissedCounter({
  count,
}: INotDismissedCounterProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: 8,
        right: 8,
        color: "black",
        backgroundColor: "white",
        borderRadius: "50%",
        width: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "20px",
        fontWeight: 500,
      }}
    >
      {count}
    </div>
  );
}
