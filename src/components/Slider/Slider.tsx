import React from "react";
import Typography from "../Typography";
import { Slider, Box } from "@mui/material";
import { InputContainer, LabelContainer, InputItemConteiner } from "./styles";

type SliderType = {
  label: string;
  defaultValue?: number | number[];
};

export default function SliderComponent({ label }: SliderType) {
  return (
    <InputContainer>
      <LabelContainer>
        <Typography variant="body1" text={label} />
      </LabelContainer>
      <InputItemConteiner>
        <>
          <Box width={300}>
            <Slider aria-label={label} />
          </Box>
        </>
      </InputItemConteiner>
    </InputContainer>
  );
}
