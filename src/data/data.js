let FirstChartOption = {
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  tooltips: {
    backgroundColor: "#f5f5f5",
    titleFontColor: "#333",
    bodyFontColor: "#666",
    bodySpacing: 4,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
  },
  responsive: true,
  scales: {
    yAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(29,140,248,0.1)",
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a",
        },
      },
    ],
  },
};

let demoChart1 = {
  data1: (canvas) => {
    let vas = canvas.getContext("2d");
    let linearstroke = vas.createLinearGradient(0, 230, 0, 50);
    linearstroke.addColorStop(1, "rgba(7, 105, 204, 0.2)");
    linearstroke.addColorStop(0.4, "rgba(17, 135, 253, 0)");
    linearstroke.addColorStop(0, "rgba(29,140,248,0)");

    return {
      labels: ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"],
      datasets: [
        {
          label: "My cordinates",
          backgroundColor: linearstroke,
          borderWidth: 2,
          borderColor: "#085aa1",
          pointBackgroundColor: "#085aa1",
          pointBorderColor: "rgba(255,255,255,0)",
          pointBorderWidth: 15,
          pointHoverRadius: 4,
          pointRadius: 3,
          data: [70, 90, 105, 110, 85, 105, 115],
        },
      ],
    };
  },
  options: FirstChartOption,
};
module.exports = {
  demoChart1,
};
