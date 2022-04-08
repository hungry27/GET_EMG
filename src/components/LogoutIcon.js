import React from "react";
import { Header, Icon } from "semantic-ui-react";

const LogoutIcon = () => (
  <Header as="h2" icon>
    <Icon name="sign-out" />
    Signed Out
    <Header.Subheader>Take care, see you next time!</Header.Subheader>
  </Header>
);

export default LogoutIcon;
