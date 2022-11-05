import React, { useState } from "react";
import { Form } from "react-final-form";
import {
  createEvent,
  EEventStatus,
  IEvent,
  IEventsProps,
} from "../data/events";
import { simulateWork } from "../data/simulateWork";
import EventCreatedCallout from "./EventCreatedCallout";
import NotificationForm from "./NotificationForm";

export default function AddNotificationForm({
  events,
  setEvents,
}: IEventsProps) {
  const [showCallout, setShowCallout] = useState(false);
  const [createdEvent, setCreatedEvent] = useState<IEvent | null>(null);

  return (
    <>
      {showCallout && createdEvent && (
        <EventCreatedCallout
          event={createdEvent}
          setShowCallout={setShowCallout}
        />
      )}

      <Form
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values) => {
          const newEvent = createEvent(values.title, values.description);

          setEvents([...events, newEvent]);
          setCreatedEvent(newEvent);
          setShowCallout(true);

          /*
          await simulateWork(() => {
            const result = events.map((event) => {
              if (event.id === newEvent.id) {
                return { ...event, status: EEventStatus.COMPLETED };
              }

              return event;
            });
            console.log("Worker finished: ", result);
            setEvents(result);
          });
          */
        }}
        subscription={{
          submitting: true,
        }}
      >
        {({ handleSubmit, submitting }) => (
          <NotificationForm
            handleSubmit={handleSubmit}
            submitting={submitting}
          />
        )}
      </Form>
    </>
  );
}
