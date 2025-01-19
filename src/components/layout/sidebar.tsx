import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
const userRole = {
  ADMIN: 'admin',
  FACULTY:'faculty',
  STUDENT:'student'
}
export default function Sidebar() {
const role = 'admin'
  switch (role) {
    case userRole.ADMIN:
    sidebarItems=   sidebarItemsGenerator(adminPaths, userRole.ADMIN)
      break;
  
    default:
      break;
  }
  return (
    <div>
      {" "}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItemsGenerator(adminPaths, "admin")}
        />
      </Sider>
    </div>
  );
}
