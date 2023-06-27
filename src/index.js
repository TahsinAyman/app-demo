import "./resources/css/styles.css";
import ReactDOM from "react-dom/client";
import React from "react";
import AppController from "./main/controller/AppController";
import { Provider } from "react-redux";
import configureAppStore from "./main/service/store";
import repository from "./main/repository/repository";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureAppStore(repository);

root.render(
  <Provider store={store}>
    <AppController />
  </Provider>
);
