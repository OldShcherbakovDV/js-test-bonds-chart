import React from "react";
import { Provider } from "react-redux";

import configureStore from "./redux";

import Bonds from "./components/Bonds";
import "./App.css";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Bonds />
  </Provider>
);

export default App;
