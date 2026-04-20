// theme/lightTheme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#076c66" },
    secondary: { main: "#f5b400" },
    background: {
      default: "#F0F4F8",
      paper: "rgba(255,255,255,0.7)",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)",
        },
      },
    },
  },
});
