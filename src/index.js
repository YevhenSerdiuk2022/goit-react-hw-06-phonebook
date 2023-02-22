import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store, persiststor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
