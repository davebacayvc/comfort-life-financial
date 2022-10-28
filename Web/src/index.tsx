import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { REACT_ROUTES } from "./constants/constants";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {REACT_ROUTES.map((ROUTE, index) => (
          <React.Fragment key={index}>
            <Route path={ROUTE.PATH} element={ROUTE.ELEMENT} />
          </React.Fragment>
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
