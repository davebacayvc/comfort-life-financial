import { Avatar, Menu, MenuItem } from "@mui/material";
import classNames from "classnames";
import paths from "constants/routes";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "redux/actions/userActions";
import AdminSidebar from "./Sidebar/Sidebar";
import { stringAvatar } from "helpers/stringAvatar";
import Breadcrumb from "./Breadcrumb/Breadcrumb";

type GuardedWrapperProps = {
  children: React.ReactNode;
};
const GuardedWrapper: React.FC<GuardedWrapperProps> = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state: any) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      navigate(paths.login);
    }
  }, [userInfo]);

  const logoutHandler = () => {
    dispatch(logout() as any);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value: any) => {
    setToggled(value);
  };

  const adminClassnames = classNames({
    "admin-wrapper": true,
    toggled: toggled,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const avatarHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const crumbs = [
    {
      title: "Home",
      url: "",
    },
    {
      title: "Events",
      url: "",
    },
    {
      title: "Event Invites",
      url: "",
    },
  ];

  return (
    <div className={adminClassnames}>
      <AdminSidebar
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
      />
      <main>
        <div className="admin-top-nav">
          <Breadcrumb crumbs={crumbs} />
          <Avatar
            {...stringAvatar("Dave Bacay")}
            onClick={avatarHandler as any}
            className="top-nav-avatar"
          />

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </div>
        {props.children}
      </main>
    </div>
  );
};

export default GuardedWrapper;
