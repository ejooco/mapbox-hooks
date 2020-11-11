// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
// Style
import "./styles.css";
// Components and Apps
import App from "./App";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWpvb2NvIiwiYSI6ImNrZ2YxaHdzOTFnYTEyenF1dzVkbTY4cWYifQ.8WxLXiSvR3K42_tRQpcL4Q";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
