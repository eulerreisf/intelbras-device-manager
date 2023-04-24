import React from "react";

import { StyledContent, StyledContainer, StyledInfos } from "./styles";

import { Typography } from "../../components";

import { Grid } from "@mui/material";

interface DisplayDeviceProps {
  defaultValues: object;
}

const DisplayDevice = ({ defaultValues }: DisplayDeviceProps) => {
  console.log("defaultValues", defaultValues);
  return (
    <StyledContainer>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography variant="h3" text="Informações" />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            text="Sistema"
            style={{ marginBottom: 10, marginTop: 20 }}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Modelo" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.model} />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Hostname" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.alias} />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Versão de Firmware" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.version} />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Uptime" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.uptime} />
          </StyledContent>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            text="Wi-Fi"
            style={{ marginBottom: 10, marginTop: 20 }}
          />
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Nome da Rede" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.description} />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Modo de Operação" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography
              variant="subtitle1"
              text={defaultValues?.network_mode}
            />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text="Potência de RF" />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.maxassoc} />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography
              variant="subtitle1"
              text="Quantidade de clientes conectados"
            />
          </StyledContent>
        </Grid>
        <Grid item xs={6}>
          <StyledContent>
            <Typography variant="subtitle1" text={defaultValues?.custumers} />
          </StyledContent>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default DisplayDevice;
