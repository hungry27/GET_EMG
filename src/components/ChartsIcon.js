import React from "react";
import { Header, Icon } from "semantic-ui-react";

const ChartsIcon = () => (
  <Header as="h2" icon>
    <Icon name="chart area" />
    EMG Evaluation
    <Header.Subheader>
      Please ensure everything is connected and operating
    </Header.Subheader>
  </Header>
);

export default ChartsIcon;
