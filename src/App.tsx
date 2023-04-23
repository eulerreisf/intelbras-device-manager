import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useDeviceFetcher } from "../src/services/Devices";
import intelbrasIcon from "/intelbras.ico";
import theme from "./theme";

const App = () => {
  const { device, loading } = useDeviceFetcher();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <a>
          <img src={intelbrasIcon} className="logo" alt="Intelbras logo" />
        </a>
      </div>
      <h1>Device Manager</h1>
      <button>refetch</button>
      {!loading && <div>{device}</div>}
    </ThemeProvider>
  );
};

export default App;
