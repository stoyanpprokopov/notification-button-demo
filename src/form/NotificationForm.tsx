import React from "react";
import TextareaField from "./TextareaField";
import TextField from "./TextField";
import { FormSpy, useForm } from "react-final-form";

interface INotificationFormProps {
  handleSubmit: any;
  submitting?: boolean;
}

export default function NotificationForm({
  handleSubmit,
  submitting,
}: INotificationFormProps) {
  const form = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          width: "600px",
          display: "grid",
          gridTemplateColumns: "1fr",
          rowGap: "12px",
          padding: "12px",
        }}
      >
        <TextField label="Title" placeholder="Type title" fieldName="title" />
        <TextareaField
          label="Description"
          placeholder="Type description"
          fieldName="description"
        />
        <FormSpy subscription={{ values: true }}>
          {({ values }) => (
            <button
              type="button"
              disabled={submitting}
              style={{
                border: "1px solid #dddddd",
                padding: "4px 8px",
                width: "80px",
              }}
              onClick={() => {
                if (!values.title || !values.description) {
                  alert("Missing title or description");
                  return;
                }

                handleSubmit();
                form.reset({
                  title: "",
                  description: "",
                });
              }}
            >
              Add Event
            </button>
          )}
        </FormSpy>
      </div>
    </form>
  );
}
