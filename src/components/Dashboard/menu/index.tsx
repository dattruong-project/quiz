import React from 'react';
import {
    DesktopOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { dashboardRoute } from '../../../route';

//TODO: Change this icon
// TODO: Tab Home for creating question

const MenuPage: React.FC = () => {
    const items = [
        // { label: "home", key: "home", icon: <PieChartOutlined />, to: "/dashboard"},
        { label: "quiz", key: "quiz", icon: <DesktopOutlined />, to: `/${dashboardRoute}`}
    ];
    
    return (
            <Menu style={{
                height: "100%",
              }} mode="inline" defaultSelectedKeys={[items[0].key]}>
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <NavLink to={item.to}>{item.label}</NavLink>
                    </Menu.Item>
                ))}
            </Menu>
    );
};

export default MenuPage;
