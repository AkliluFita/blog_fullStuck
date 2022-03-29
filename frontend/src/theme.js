import { green, purple, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: purple[500],
    },
  },
  myTitle: {
    backgroundColor: "red",
    color: purple[500],
  },
});
