import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  ChakraProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from "@chakra-ui/react";

const theme = extendBaseTheme({
  components: {},

  colors: {
    primary: "#1F51FF",
    secondary: "#c15aec",
    backgroundColor: "hsl(0, 0%, 7%)",
    gradientBack:
      "linear-gradient( to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97% )",
    backGrey: "hsl(240, 1%, 17%)",
    lightGrey: "hsla(0, 0%, 84%, 0.7)",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
