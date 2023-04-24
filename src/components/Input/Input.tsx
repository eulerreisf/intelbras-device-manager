import React, { ChangeEvent, useState } from "react";
import Typography from "../Typography";
import { IInput } from "../../types";
import {
  Input as TextField,
  InputContainer,
  LabelContainer,
  InputItemConteiner,
} from "./styles";

export default function Input({
  label,
  size,
  focused,
  fullWidth,
  type,
  required,
  space,
  onChange,
  onKeyDown,
  error,
  autoComplete,
  value,
  name,
  disabled,
  validate,
  defaultValue,
  title,
}: IInput) {
  const [validatedValue, setValidatedValue] = useState("");

  const onChangeValidated = (event: ChangeEvent<HTMLInputElement>): void => {
    switch (validate) {
      case "number":
        if (/^[0-9]*$/g.test(event.target.value)) {
          setValidatedValue(event.target.value);
        }
        break;
      case "string":
        if (/^[a-z]*$/gi.test(event.target.value)) {
          setValidatedValue(event.target.value);
        }
        break;
    }
  };

  return (
    <InputContainer>
      <LabelContainer>
        <Typography variant="body1" text={label} />
      </LabelContainer>
      <InputItemConteiner>
        <TextField
          size={size || "small"}
          focused={focused || true}
          fullWidth={fullWidth || false}
          onChange={!validate ? onChange : onChangeValidated}
          space={space}
          type={type}
          required={required}
          value={!validate ? value : validatedValue}
          error={error}
          autoComplete={autoComplete}
          name={name}
          disabled={disabled}
          defaultValue={defaultValue}
          onKeyDown={onKeyDown}
          title={title}
        />
      </InputItemConteiner>
    </InputContainer>
  );
}
