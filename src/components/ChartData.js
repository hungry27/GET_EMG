import React from "react";
// semantic-ui components
import { Card } from "semantic-ui-react";
import "../styles/chart.css";
import { demoChart1 } from "../data/data";
import * as d3 from "d3";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  //   scales: {
  //     x: {
  //       type: "time",
  //     },
  //   },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

// var csv = require("jquery-csv");
// var file = $.csv.toObjects(
//   "./src/data/TestGood/.ipynb_checkpoints/sampleData1-checkpoint.csv"
// );
// console.log(file);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const emgdata = d3.csv.parse(
//   "../data/TestGood/updated_sampleData1",
//   function (data) {
//     console.log("data");
//   }
// );

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

// function Linegraph() {
//   const [demoChartData, setdemoChartData] = React.useState("demoChart1");

//   return (
//     <>
//       <div className="container">
//         <Card className="card-chart">
//           <h5 className="card-details">Total Inmates</h5>
//           <Card.Content>
//             <div className="chart-zone">
//               <Line data={demoChart1.data} options={demoChart1.options} />
//             </div>
//           </Card.Content>
//         </Card>
//       </div>
//     </>
//   );
// }

// export default Linegraph;
