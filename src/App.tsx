import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Container from "./container";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
};

export default App;
