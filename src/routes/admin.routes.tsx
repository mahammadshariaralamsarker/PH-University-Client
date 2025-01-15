import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

const adminPaths2 = [
  { name: "Dashboard", path: "/admin/dashboard", element: <AdminDashBoard /> },
  {
    name: "User Management",
    children: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: <AdminDashBoard />,
      },
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: <AdminDashBoard />,
      },
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: <AdminDashBoard />,
      },
    ],
  },
];

export const adminPaths = [
  { path: "dashboard", element: <AdminDashBoard /> },
  { path: "create-student", element: <CreateStudent /> },
  { path: "create-admin", element: <CreateAdmin /> },
  { path: "create-faculty", element: <CreateFaculty /> },
];
