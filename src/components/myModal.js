import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";

function MyModal() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size="large"
      trigger={
        <Button basic inverted color="black">
          Test Me!
        </Button>
      }
    >
      <Header icon>
        <Icon name="download" />
        EMG Status
      </Header>
      <Modal.Content>
        <p>Is your EMG connected?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={() => setOpen(false)}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          id="emg"
          inverted
          onClick={() => {
            setOpen(false);
            navigate("/emg");
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
        <script></script>
      </Modal.Actions>
    </Modal>
  );
}

export default MyModal;
