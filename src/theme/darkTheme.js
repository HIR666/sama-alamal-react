// theme/darkTheme.js
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90CAF9" },
    secondary: { main: "#f5b400" },
    background: {
      default: "#0A1A28",
      paper: "rgba(20,20,30,0.6)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(16px)",
        },
      },
    },
  },
});
