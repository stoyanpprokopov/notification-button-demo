import React from "react";
import { Form } from "react-final-form";
import { createEvent, IEventsProps } from "../data/events";
import NotificationForm from "./NotificationForm";

export default function AddNotificationForm({
  events,
  setEvents,
}: IEventsProps) {
  return (
    <Form
      initialValues={{
        title: "",
        description: "",
      }}
      onSubmit={(values) => {
        setEvents([...events, createEvent(values.title, values.description)]);
      }}
      subscription={{
        submitting: true,
      }}
    >
      {({ handleSubmit, submitting }) => (
        <NotificationForm handleSubmit={handleSubmit} submitting={submitting} />
      )}
    </Form>
  );
}
