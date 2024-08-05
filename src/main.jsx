import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       {
//         path: "child",
//         element: <HomeChild />,
//       },
//       {
//         path: "second",
//         element:  <div>Child 2</div>,
//       }
//     ]
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
