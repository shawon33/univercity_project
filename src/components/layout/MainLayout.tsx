import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/features/hooks";
import { logout } from "../../redux/features/auth/authSlice";

const { Header, Content, Footer,  } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogOut =()=>{
  dispatch(logout())
  }
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
       <Header>
        <Button onClick={handleLogOut}>LogOut</Button>
       </Header>
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
  );
};

export default MainLayout;
