import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ComingSoon from "library/ComingSoon/ComingSoon";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ComingSoon />
  </React.StrictMode>
);
