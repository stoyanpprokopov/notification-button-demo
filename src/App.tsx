import "./styles.css";
import Header from "./header/Header";
import PageContainer from "./PageContainer";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useState } from "react";
import { IEvent } from "./data/events";
import eventsTestData from "./data/eventsTestData";

initializeIcons();

export default function App() {
  const [events, setEvents] = useState<IEvent[]>(eventsTestData);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header events={events} />
      <PageContainer>TODO</PageContainer>
    </div>
  );
}
