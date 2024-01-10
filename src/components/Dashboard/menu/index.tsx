import React from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const items = [
    { label: 'home', key: "quiz", icon: <PieChartOutlined />, to: "/dashboard"},
    { label: 'quiz', key: "creation", icon: <DesktopOutlined />, to: "/dashboard/quiz-creation"}
];

const MenuPage: React.FC = () => {
    return (
            <Menu style={{
                height: '100%',
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
