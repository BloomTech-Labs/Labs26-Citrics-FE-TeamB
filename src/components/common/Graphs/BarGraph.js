import React from "react";
import Plot from "react-plotly.js";
import LoadingComponent from "../../common/LoadingComponent";

const BarGraph = props => {
  const phonyData = true;
  const renderGraph = () => {
    let trace1 = {
      x: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
      type: "bar",
      name: "Primary Product",
      marker: {
        color: "rgb(49,130,189)",
        opacity: 0.7
      }
    };

    let trace2 = {
      x: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
      type: "bar",
      name: "Secondary Product",
      marker: {
        color: "rgb(204,204,204)",
        opacity: 0.5
      }
    };

    let data = [trace1, trace2];

    let layout = {
      title: "2013 Sales Report",
      xaxis: {
        tickangle: -45
      },
      barmode: "group"
    };

    return <Plot data={data} layout={layout} />;
  };
  return phonyData ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
};

export default BarGraph;
