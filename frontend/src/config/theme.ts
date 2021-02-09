import { createMuiTheme, ThemeOptions } from "@material-ui/core";

export const theme: ThemeOptions = {
  palette: {
    type: "dark",
  },
  typography: {
    allVariants: {
      color: "#e7e7e7",
    },
  },
};

const coreTheme = createMuiTheme(theme);

export default coreTheme;
