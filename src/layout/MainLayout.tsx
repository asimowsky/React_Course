import { ConfigProvider, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useTheme } from "../utils/hooks/useTheme";
const { Content } = Layout;

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider theme={theme}>
      <Layout style={{ minHeight: "100vh" }}>
        {/* <Navbar /> */}
        {/* Navbar bureye lazim gelsin */}
        <Content className={"content-container"}>
          <Outlet />
        </Content>
        {/* <Footer></Footer> */}
      </Layout>
    </ConfigProvider>
  );
};

export default MainLayout;
