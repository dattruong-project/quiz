import { Layout } from "antd";
import MenuPage from "../menu";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import HeaderComponent from "./header";

type MainLayoutProps = {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return <>
        <Layout>
            <HeaderComponent />
            <Content>
                <Layout>
                    <Sider>
                        <MenuPage />
                    </Sider>
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </Content>
            <Footer>Version: 0.9.3</Footer>
        </Layout>
    </>
}

export default MainLayout;