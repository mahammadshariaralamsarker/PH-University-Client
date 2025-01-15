import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  { path: "create-student", element: <CreateStudent /> },
  { path: "create-admin", element: <CreateAdmin /> },
  { path: "create-faculty", element: <CreateFaculty /> },
  { path: "dashboard", element: <AdminDashBoard /> },
];
