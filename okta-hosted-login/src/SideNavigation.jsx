/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaGem, FaHeart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  const styles = {
    sideBarHeight: {
      height: '100vh',
      background: 'red !important',
    },
    menuIcon: {
      float: 'right',
      margin: '10px',
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div id="header" style={{ marginLeft: '-20.5em', marginTop: '-3.5em', width: '260px' }}>
      <ProSidebar style={styles.sideBarHeight} collapsed={collapsed} className="proSidebar">
        <SidebarHeader>
          <div style={styles.menuIcon} onClick={onClickMenuIcon}>
            <AiOutlineMenu />
          </div>
        </SidebarHeader>
        <Menu iconShape="square">
          <MenuItem icon={<FaGem />}>
            <NavLink exact to="/dashboard">
              Dashboard
            </NavLink>
          </MenuItem>
          <MenuItem icon={<FaGem />}>Users</MenuItem>
          <SubMenu title="Firms" icon={<FaHeart />}>
            <MenuItem>Track Report</MenuItem>
            <MenuItem>Inventory Report</MenuItem>
            <MenuItem>Customer Report</MenuItem>
          </SubMenu>
          <SubMenu title="Platforms" icon={<FaHeart />}>
            <MenuItem>Permissions</MenuItem>
            <MenuItem>Settings</MenuItem>
          </SubMenu>
          <SubMenu title="Reports" icon={<FaHeart />}>
            <MenuItem>Notification</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideNavigation;
