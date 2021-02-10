import { createMuiTheme, ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#bc50e8",
    },
    secondary: {
      main: "#00ff00",
    },
  },
  typography: {
    allVariants: {
      color: "#e7e7e7",
    },
  },
};

const coreTheme = createMuiTheme(theme);

export default coreTheme;
