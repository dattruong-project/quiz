import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderComponent = () => {

    const items: MenuProps['items'] = [
        {
            label: "Settings",
            key: "Settings",
            onClick: () => {
                console.log("Settings on clicked");
            }
        },
        {
            type: 'divider',
        },
        {
            label: 'Logout',
            key: 'Logout',
            onClick: () => {}
        },
    ];

    return <>
        <Header style={{
            display: 'flex',
            backgroundColor: "white",
            justifyContent: "end"
        }} >
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar />
                    </Space>
                </a>
            </Dropdown>
        </Header>
    </>
}

export default HeaderComponent;