import * as React from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useLogoutFetcher, useLoginFetcher } from "../../services";
import { IntelbrasLogo } from "../../components";

const Header = () => {
  const { logout } = useLogoutFetcher();
  const { login } = useLoginFetcher();

  const handleLogout = async () => {
    await login();
    //TODO
    //set authenticated false
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IntelbrasLogo />
          <IconButton color="info" aria-label="logout" onClick={handleLogout}>
            <Logout />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
