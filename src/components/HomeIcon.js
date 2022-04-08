import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HomeIcon = () => (
  <Header as="h2" icon>
    <Icon name="home" />
    Home
    <Header.Subheader>See all the latest activity .</Header.Subheader>
  </Header>
);

export default HomeIcon;
