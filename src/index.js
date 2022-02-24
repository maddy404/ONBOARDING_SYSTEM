import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { BtnProvider } from "./contexts";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BtnProvider>
        <App />
      </BtnProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
