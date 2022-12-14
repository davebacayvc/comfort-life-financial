import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";
import { REACT_ROUTES } from "./constants/constants";
import { createBrowserHistory } from "history";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HistoryRouter history={createBrowserHistory({ window })}>
      <Routes>
        {REACT_ROUTES.map((ROUTE, index) => (
          <React.Fragment key={index}>
            <Route path={ROUTE.PATH} element={ROUTE.ELEMENT} />
          </React.Fragment>
        ))}
      </Routes>
    </HistoryRouter>
  </React.StrictMode>
);
