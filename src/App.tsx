import "./styles.css";
import Header from "./header/Header";
import PageContainer from "./PageContainer";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { useEffect, useState } from "react";
import { EEventStatus, IEvent } from "./data/events";
import eventsTestData from "./data/eventsTestData";
import AddNotificationForm from "./form/AddNotificationForm";

initializeIcons();

const WORKER_TIME = 5000;

export default function App() {
  let timer: NodeJS.Timer;
  const [events, setEvents] = useState<IEvent[]>(eventsTestData);

  useEffect(() => {
    // Simulate work
    const timer = setInterval(() => {
      console.log("Worker works...");
      setEvents((events) => {
        const result = events.map((event) => {
          if (event.status === EEventStatus.IDLE) {
            return {
              ...event,
              status: EEventStatus.IN_PROGRESS,
              dismissed: false,
            };
          }

          if (event.status === EEventStatus.IN_PROGRESS) {
            return {
              ...event,
              status: EEventStatus.COMPLETED,
              dismissed: false,
            };
          }

          return event;
        });

        return result;
      });
    }, WORKER_TIME);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header events={events} setEvents={setEvents} />
      <PageContainer>
        <AddNotificationForm events={events} setEvents={setEvents} />
      </PageContainer>
    </div>
  );
}
