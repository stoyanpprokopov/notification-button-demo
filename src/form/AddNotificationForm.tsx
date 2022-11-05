import React, { useState } from "react";
import { Form } from "react-final-form";
import {
  createEvent,
  EEventStatus,
  IEvent,
  IEventsProps,
} from "../data/events";
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
