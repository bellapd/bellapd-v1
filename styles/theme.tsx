import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    body: "Roboto, system-ui, sans-serif",
  },
  colors: {
    lighter: "#FED7E2",
    light: "#F687B3",
    dark: "#B83280",
    darker: "#702459",
  },
});

export default Theme;
