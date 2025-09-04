import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { Dashboard } from "./pages/Dashboard";
import { Teams } from "./pages/Teams";
import { Tickets } from "./pages/Tickets";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route index path="/teams" element={<Teams/>} />
      <Route index path="/tickets" element={<Tickets/>} />

      </Route>
    
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
