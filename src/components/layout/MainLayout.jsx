import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ mode, toggleMode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.8,
          zIndex: 0,
          background: (theme) =>
            theme.palette.mode === "dark"
              ? `
                radial-gradient(circle at 15% 20%, rgba(149,177,198,0.10), transparent 30%),
                radial-gradient(circle at 85% 15%, rgba(119,124,83,0.12), transparent 32%),
                radial-gradient(circle at 50% 100%, rgba(255,255,255,0.03), transparent 40%)
              `
              : `
                radial-gradient(circle at 15% 20%, rgba(149,177,198,0.14), transparent 30%),
                radial-gradient(circle at 85% 15%, rgba(119,124,83,0.12), transparent 32%),
                radial-gradient(circle at 50% 100%, rgba(119,124,83,0.05), transparent 40%)
              `,
        }}
      />

      <Navbar mode={mode} toggleMode={toggleMode} />

      <Box
        component="main"
        sx={{
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
