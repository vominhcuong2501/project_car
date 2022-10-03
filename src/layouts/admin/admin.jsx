import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import HeaderAdmin from "../../components/header-admin/header";
import "./admin.scss";
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export default function Admin() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout
        className="web"
        style={{
          minHeight: window.innerHeight,
        }}
      >
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div
            className="logo p-3 my-3 d-flex justify-content-between align-items-end"
            style={{ width: "240px" }}
          >
            <NavLink to="/admin">
              <img
                src={require("../../Assets/images/logo/UCARS Logo.png")}
                alt="UCARS Logo.png"
                width={100}
                height={30}
              />
            </NavLink>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger text-light",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </div>
          <Menu
            className="mt-3 px-3"
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              getItem(
                "Car Brand",
                "1",
                <i className="fa-solid fa-car-side"></i>
              ),
              getItem(
                "Folder",
                "sub1",
                <i className="fa-solid fa-folder"></i>,
                [
                  getItem("Menu Item", "2"),
                  getItem("Menu Item", "3"),
                  getItem("Menu Item", "4"),
                  getItem("Menu Item", "5"),
                ]
              ),
              getItem("Tasks", "6", <i className="fa-solid fa-folder"></i>),
              getItem("Modules", "7", <i className="fa-solid fa-folder"></i>),
              getItem(
                "Notifications",
                "8",
                <i className="fa-solid fa-folder"></i>
              ),
            ]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              backgroundColor: "#F0F2F5",
            }}
          >
            <HeaderAdmin />
          </Header>
          <Content
            className="site-layout-background container-fluid p-0"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>

      {/* Mobile */}
      <div className="mobile">
        <Outlet />
      </div>
    </div>
  );
}
