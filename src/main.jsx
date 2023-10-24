import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/states/redux/store/store";
import { TokenProvider } from "./utils/states/contexts/token-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <TokenProvider>
        <App />
      </TokenProvider>
    </Provider>
  </React.StrictMode>
);
