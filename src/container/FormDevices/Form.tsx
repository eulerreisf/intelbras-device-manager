/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { StyledInputsContainer } from "./styles";
import { Select, Input, Typography, Slider } from "../../components";
import { MenuItem } from "@mui/material";

type PropsInterface = {
  inputs?: any;
  defaultValues?: { [key: string]: any };
  upDateTableRows?: any;
  action?: any;
};

// const SliderComponent = () => {
//   return (
//     <>
//       <Box width={300}>
//         <Slider
//           defaultValue={50}
//           aria-label="Default"
//           valueLabelDisplay="auto"
//         />
//       </Box>
//     </>
//   );
// };

const Form = (props: PropsInterface) => {
  const { defaultValues, upDateTableRows } = props;
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
  });

  const formStyle = {
    width: "100%",
  };

  const onSubmit = async (data: any) => {
    console.log("submit");
  };

  const renderValue = (option: any | null) => {
    return <span>value</span>;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <Typography variant="h3" text="Configurações" />
      <Typography variant="h5" text="Sistema" />
      <StyledInputsContainer>
        <Controller
          name="hostname"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                key="hostname"
                label="Hostname"
                onChange={onChange}
                value={value}
                fullWidth
              />
            );
          }}
        />
      </StyledInputsContainer>
      <Typography variant="h5" text="Wi-Fi" />
      <StyledInputsContainer>
        <Controller
          name="profile"
          control={control}
          render={({ field }) => {
            return (
              <Select
                label="label select"
                renderValue={renderValue}
                fullWidth={true}
                {...field}
                disabled={true}
              >
                <MenuItem value="teste">test</MenuItem>
              </Select>
            );
          }}
        />
      </StyledInputsContainer>
      <StyledInputsContainer>
        <Controller
          name="hostname"
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                key="hostname"
                label="Hostname"
                onChange={onChange}
                value={value}
                fullWidth
              />
            );
          }}
        />
      </StyledInputsContainer>
      <StyledInputsContainer>
        <Slider label="Potência de RF" />
      </StyledInputsContainer>
    </form>
  );
};

export default Form;
