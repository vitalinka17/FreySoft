import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import theme from "./theming";
import store from "./store/store";
import Test from "./components/Test/Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Test
          color={"red"}
          size={20}
          data={[
            { id: 1, text: "49949" },
            { id: 2, text: "etette" },
          ]}
        />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
