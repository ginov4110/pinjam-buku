import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/";
import "./index.css";
import { TokenProvider } from "./utils/states/contexts/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);
