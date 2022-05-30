import { createTheme } from "@mui/material/styles"
/*
 aqua: "#6DD6C4",
      yellow: "#ECAA32",
*/
export const nordenPurple = createTheme({
  palette: {
    primary: {
      main: "#712384",
      700: "#571F7C",
    },
    secondary: {
      main: "#f1cf5a",
    },

    error: {
      main: "#ca2438",
    },
    warning: {
      main: "#ECAA32",
    },
    success: {
      main: "#6dd6c4",
    },
  },
  typography: {
    fontFamily: "Raleway",
    body2: {
      fontFamily: "Poppins",
      fontSize: "1rem",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 100,
    },
    button: {
      fontWeight: 200,
      fontSize: "1.2rem",
    },
    caption: {
      fontFamily: "Poppins",
      fontWeight: 200,
      fontSize: "1rem",
    },
    overline: {
      fontFamily: "Poppins",
      fontWeight: 200,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 900,
    },
    subtitle2: {
      fontSize: "1.2rem",
      fontWeight: 900,
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 900,
      lineHeight: 2.9,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
      lineHeight: 2.37,
    },
  },
  spacing: 8,
  direction: "rtl",
  shape: {
    borderRadius: 8,
  },
})
