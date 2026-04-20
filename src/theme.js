import { createTheme, alpha } from "@mui/material/styles";

const commonThemeOptions = {
  direction: "rtl",
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: `"Cairo", "Tajawal", "Roboto", sans-serif`,
    h1: {
      fontWeight: 800,
      lineHeight: 1.15,
    },
    h2: {
      fontWeight: 800,
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h6: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },
};

export const getAppTheme = (mode = "light") => {
  const isDark = mode === "dark";

  const palette = {
    mode,
    primary: {
      main: "#777C53",
      light: "#8B9164",
      dark: "#5F643F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#95B1C6",
      light: "#A9C0D2",
      dark: "#6C8CA5",
      contrastText: isDark ? "#0E1217" : "#FFFFFF",
    },
    background: {
      default: isDark ? "#0B0E12" : "#F7F8F6",
      paper: isDark ? "#11161C" : "#FFFFFF",
    },
    text: {
      primary: isDark ? "#F2F2F2" : "#181A1D",
      secondary: isDark ? "#B6BDC7" : "#56606B",
    },
    divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
  };

  return createTheme({
    ...commonThemeOptions,
    palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            direction: "rtl",
          },
          body: {
            direction: "rtl",
            margin: 0,
            padding: 0,
          },
          "*": {
            boxSizing: "border-box",
          },
          a: {
            color: "inherit",
          },
          ".english-brand": {
            fontFamily: `"Cormorant Garamond", serif`,
            letterSpacing: "0.08em",
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "lg",
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: isDark
              ? alpha("#11161C", 0.72)
              : alpha("#FFFFFF", 0.96),
            backdropFilter: "blur(18px)",
            borderBottom: `1px solid ${palette.divider}`,
            boxShadow: isDark ? "none" : "0 8px 24px rgba(15, 23, 42, 0.06)",
            color: isDark ? "#F2F2F2" : "#181A1D",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            borderRadius: 24,
            border: `1px solid ${palette.divider}`,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            border: `1px solid ${palette.divider}`,
            background: isDark
              ? "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015))"
              : "linear-gradient(180deg, #FFFFFF, #FBFBF9)",
            boxShadow: isDark
              ? "0 10px 30px rgba(0,0,0,0.25)"
              : "0 10px 30px rgba(16,24,40,0.06)",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 14,
            paddingInline: 20,
            minHeight: 46,
          },
          containedPrimary: {
            boxShadow: "none",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 999,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
        },
      },
    },
  });
};
