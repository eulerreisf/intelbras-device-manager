import * as React from "react";
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { useLogoutFetcher } from "../../services";
import { IntelbrasLogo } from "../../components";

const Header = () => {
  const { logout } = useLogoutFetcher();

  const handleLogout = async () => {
    await logout();
    //TODO
    //set authenticated false
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
