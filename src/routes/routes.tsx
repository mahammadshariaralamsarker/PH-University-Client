import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Login from "../pages/login";
import Register from "../pages/register"; 
import { adminPaths } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminPaths,
  },
  {
    path: "/faculty",
    element: <App />,
    children: adminPaths,
  },
  {
    path: "/student",
    element: <App />,
    children: adminPaths,
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);
