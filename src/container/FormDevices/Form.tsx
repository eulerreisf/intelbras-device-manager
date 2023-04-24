/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  StyledInputsContainer,
  StyledContent,
  StyledButtonConteiner,
} from "./styles";
import { Select, Input, Typography, Slider, Button } from "../../components";
import { MenuItem } from "@mui/material";
import { useEditDevice } from "../../services";

type PropsInterface = {
  defaultValues?: { [key: string]: any };
};

const Form = (props: PropsInterface) => {
  const { defaultValues } = props;
  const {
    control,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
  });

  const navigate = useNavigate();

  const { loadingEditDevice, editDevice } = useEditDevice();

  const formStyle = {
    width: "100%",
  };

  const handleDescartar = () => {
    navigate("/");
  };

  const onSubmit = (data: any) => {
    const newData = {
      data: {
        ...data,
      },
    };

    editDevice(newData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <Typography
        variant="h3"
        text="Configurações"
        style={{ marginBottom: 20 }}
      />
      <StyledContent>
        <Typography variant="h5" text="Sistema" style={{ marginBottom: 10 }} />
        <StyledInputsContainer style={{ marginBottom: 20 }}>
          <Controller
            key="alias"
            name="alias"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  key="alias"
                  label="Hostname"
                  onChange={onChange}
                  value={value}
                  fullWidth
                />
              );
            }}
          />
        </StyledInputsContainer>
        <Typography variant="h5" text="Wi-Fi" style={{ marginBottom: 20 }} />
        <StyledInputsContainer>
          <Controller
            name="network_mode"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Select
                  label="Modo de Operação"
                  onChange={onChange}
                  value={value}
                >
                  <MenuItem value="router">Router</MenuItem>
                </Select>
              );
            }}
          />
        </StyledInputsContainer>
        <StyledInputsContainer>
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Input
                  key="description"
                  label="Nome da Rede"
                  onChange={onChange}
                  value={value}
                  fullWidth
                />
              );
            }}
          />
        </StyledInputsContainer>
        <StyledInputsContainer>
          <Controller
            name="maxassoc"
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <Slider
                  key="maxassoc"
                  label="Potência de RF"
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
        </StyledInputsContainer>
        <StyledButtonConteiner>
          <Button text="Aplicar" disabled={isSubmitting} type="submit" />
          <Button
            text="Descartar"
            onClick={handleDescartar}
            disabled={isSubmitting}
          />
        </StyledButtonConteiner>
      </StyledContent>
    </form>
  );
};

export default Form;
