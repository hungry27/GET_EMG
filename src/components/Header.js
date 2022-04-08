import React from "react";
import { Menu, Image, Icon, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import logo from "../images/emg-logo.svg";

function Header() {
  const navigate = useNavigate();
  return (
    <Menu secondary pointing>
      <Image
        src={logo}
        width={60}
        onClick={() => {
          navigate("/");
        }}
      />
      <Menu.Item
        style={{ fontSize: 24 }}
        onClick={() => {
          navigate("/");
        }}
      >
        GET EMG'D
      </Menu.Item>
      <Menu.Item position="right">
        <Button
          color="violet"
          basic
          icon
          onClick={() => {
            navigate("/chart");
          }}
        >
          <Icon name="chart area"></Icon>Charts
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          color="violet"
          basic
          icon
          onClick={() => {
            navigate("/profile");
          }}
        >
          <Icon name="heartbeat"></Icon>Profile
        </Button>
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Button
          color="red"
          basic
          icon
          onClick={() => {
            navigate("/logout");
          }}
        >
          <Icon name="log out"></Icon>Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
