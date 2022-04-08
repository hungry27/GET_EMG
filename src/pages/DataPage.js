import "../styles/App.css";
import "../styles/chart.css";
import React from "react";
import { options, data } from "../components/ChartData";
import { Line } from "react-chartjs-2";
import { Card, CardHeader, Icon, Image } from "semantic-ui-react";
import emg from "../images/emg.png";
import emg1 from "../images/emg1.png";

export default function DataPage() {
  return (
    <>
      <div className="container">
        <Card className="card-chart">
          <Card.Header>
            <h2>Today's Results</h2>
          </Card.Header>
          <Card.Content>
            <div className="chart-zone">
              <Image src={emg}></Image>
            </div>
          </Card.Content>
        </Card>

        <p></p>

        <Card className="card-chart">
          <CardHeader>
            <h2>March 23rd 2022 Scan</h2>
          </CardHeader>
          <Card.Content>
            <div className="chart-zone">
              <Image src={emg1}></Image>
            </div>
          </Card.Content>
        </Card>
      </div>
    </>
  );
}
