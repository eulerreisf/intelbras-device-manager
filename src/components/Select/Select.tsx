import React from "react";
import Typography from "../Typography";
import {
  Select as Selection,
  SelectContainer,
  LabelContainer,
  InputItemConteiner,
} from "./styles";
import { ISelect } from "../../types";

export default function Select({
  label,
  fullWidth,
  children,
  value,
  defaultValue,
  onChange,
  disabled,
  renderValue,
  pmargin,
  props,
}: ISelect) {
  return (
    <SelectContainer>
      <LabelContainer>
        <Typography variant="body1" text={label} />
      </LabelContainer>
      <InputItemConteiner>
        <Selection
          fullWidth={fullWidth || true}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          renderValue={renderValue}
          pmargin={pmargin}
          {...props}
        >
          {children}
        </Selection>
      </InputItemConteiner>
    </SelectContainer>
  );
}
