const adminPaths2 = [
  { name: "Dashboard", path: "dashboard", element: "ADMIN-DASHBOARD" },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE-ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE-FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREATE-STUDENT",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.path,
      label: 'NAVLINK'
    })
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: 'NAVLINK'
    }))
    })
  }
  // acc.push(item)
  return acc
}, [])
console.log(newArray);