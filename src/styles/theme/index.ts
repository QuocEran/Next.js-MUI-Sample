import { createTheme, ThemeOptions } from "@mui/material/styles";
import colors from "styles/colors";
// Create a theme instance.

declare module "@mui/material/styles" {
  interface PaletteOptions {
    light: {
      main: string;
    };
    dark: {
      main: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.neutral,
    },
    success: {
      main: colors.success,
    },
    warning: {
      main: colors.warning,
    },
    dark: {
      main: colors.dark,
    },
    text: {
      primary: colors.primary,
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    button: {
      textTransform: "none",
    },
  },
} as ThemeOptions);

export default theme;
