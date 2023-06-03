import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start react app
const mount = (el) => {
  return ReactDOM.render(<App/>, el);
};
// if we are in development env and in isolation,
// call mount immediately

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
// we are running throug container
// and we should export the mount function
