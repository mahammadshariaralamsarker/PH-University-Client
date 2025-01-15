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
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: <CreateStudent />,
      },
    ],
  },
  /* {
    name: "Course Management",
    children: [ 
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        element: <CreateFaculty />,
      }, 
    ],
  }, */
];

export const adminPaths = [
  { path: "dashboard", element: <AdminDashBoard /> },
  { path: "create-student", element: <CreateStudent /> },
  { path: "create-admin", element: <CreateAdmin /> },
  { path: "create-faculty", element: <CreateFaculty /> },
];
