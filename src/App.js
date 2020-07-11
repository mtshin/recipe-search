import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import routes, { RenderRoutes } from "./routes";
import store from "./store/store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{RenderRoutes({ routes })}</BrowserRouter>
    </Provider>
  );
};

export default App;
