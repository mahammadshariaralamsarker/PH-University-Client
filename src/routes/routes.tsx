import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/contact";
import About from "../pages/about";
import Login from "../pages/login";
import Register from "../pages/register";
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminLayOut from "../components/layout/AdminLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayOut />,
    children: [
      { index:true, element: <AdminDashBoard /> },
      { path: "create-student", element: <CreateStudent /> },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "contact", element: <Contact /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
]);
