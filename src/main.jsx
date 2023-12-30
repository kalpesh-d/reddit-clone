import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.js";
import { Provider } from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
