import "./index.css";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import AppProviders from "./context";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
