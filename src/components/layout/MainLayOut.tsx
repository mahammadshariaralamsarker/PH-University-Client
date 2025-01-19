import { Layout    } from "antd";
import {   Outlet } from "react-router-dom";
 
import Sidebar from "./sidebar";
const { Header, Content, Footer } = Layout;
 
export default function MainLayOut() {
  return (
    <div>
      {" "}
      <Layout style={{ height: "100vh" }}>
      <div>
        <Sidebar/>
      </div>
        <Layout>
          <Header style={{ padding: 0 }} />
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
