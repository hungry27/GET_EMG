import React from "react";
import "../styles/App.css";
import Loading from "../components/Loading";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";
import Delayed from "../components/Delayed";

function Load() {
  const navigate = useNavigate();
  return (
    <div className="center">
      <Loading />
      <p></p>
      <Delayed>
        <Button
          basic
          inverted
          color="black"
          onClick={() => setTimeout(navigate("/data"), 5000)}
        >
          See Chart Now!
        </Button>
      </Delayed>
    </div>
  );
}

export default Load;
