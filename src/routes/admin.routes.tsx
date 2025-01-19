
import AdminDashBoard from "../pages/admin/AdminDashBoard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import { NavLink } from "react-router-dom";
import { TSideBarItem } from "../types/Sidebar.type";
 


export const adminPaths = [
  { name: "Dashboard", path: "dashboard", element: <AdminDashBoard /> },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },

];





export const adminSideBarItems = adminPaths.reduce((acc:TSideBarItem[], item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.path,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
    })
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
    }))
    })
  } 
  return acc
}, [])