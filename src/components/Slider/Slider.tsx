import React from "react";
import Typography from "../Typography";
import { Slider, Box } from "@mui/material";
import { InputContainer, LabelContainer, InputItemConteiner } from "./styles";

type SliderType = {
  label: string;
  defaultValue?: number | number[];
  onChange?: any;
  value?: any;
};

export default function SliderComponent({
  label,
  onChange,
  value,
}: SliderType) {
  return (
    <InputContainer>
      <LabelContainer>
        <Typography variant="body1" text={label} />
      </LabelContainer>
      <InputItemConteiner>
        <>
          <Box width={300}>
            <Slider
              aria-label={label}
              valueLabelDisplay="on"
              onChange={onChange}
              value={value}
              max={200}
            />
          </Box>
        </>
      </InputItemConteiner>
    </InputContainer>
  );
}
