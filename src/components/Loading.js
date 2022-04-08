import React from "react";
import { Message, Icon } from "semantic-ui-react";

const Loading = () => (
  <Message icon>
    <Icon name="circle notched" color="purple" loading />
    <Message.Content>
      <Message.Header>Just A Moment</Message.Header>
      Please stay still while EMG data is being captured
    </Message.Content>
  </Message>
);

export default Loading;
