import React from "react";               #importing react 
import ReactDOM from "react-dom";       #Syntax of ReactDOM reader(element, container[callback])
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
