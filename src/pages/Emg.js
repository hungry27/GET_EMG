import MyModal from "../components/myModal";
import "../styles/index.css";
import "../styles/App.css";
import React from "react";
import ChartsIcon from "../components/ChartsIcon";

function Emg() {
  return (
    <div className="App">
      <ChartsIcon />
      <p> </p>
      <MyModal />
    </div>
  );
}

export default Emg;
