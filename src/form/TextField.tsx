import React from "react";
import { Field } from "react-final-form";
import { IFormFieldProps } from "./formFieldProps";

export default function TextField({
  fieldName,
  label,
  placeholder,
}: IFormFieldProps) {
  return (
    <Field name={fieldName}>
      {({ input }) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            <label>{label}</label>
            <input
              type="text"
              style={{
                marginTop: "8px",
                border: "1px solid #dddddd",
                padding: "4px 8px",
              }}
              placeholder={placeholder}
              required={true}
              {...input}
            />
          </div>
        );
      }}
    </Field>
  );
}
