import { createTheme } from "@mui/material/styles";

const theme = createTheme( {
  palette: {
    primary: {
      main: '#00a335',
    },
    secondary: {
      main: '#3e5055'
    },
    info: {
      main: '#FFFFFF',
    }
  },

  components: {
    MuiTypography: {
      defaultProps: {
        color: '#87c9845',
        fontFamily: 'sans-serif',
      },
    },
  },
} );

export default theme;