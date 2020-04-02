import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

describe("Application", () => {
  it("Render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
