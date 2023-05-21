import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import theme from "./theming";
import store from "./store/store";
import Navigation from "./features/Navigation";
import Layout from "./features/Layout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <Layout>
            <Navigation />
          </Layout>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
