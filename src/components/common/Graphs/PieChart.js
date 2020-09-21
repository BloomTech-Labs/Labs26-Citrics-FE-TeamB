import React from "react";
import Plot from "react-plotly.js";
import LoadingComponent from "../../common/LoadingComponent";

const PieChart = props => {
  const phonyData = true;
  const renderGraph = () => {
    let data = [
      {
        values: [19, 26, 55],
        labels: ["Residential", "Non-Residential", "Utility"],
        type: "pie"
      }
    ];

    let layout = {
      height: 400,
      width: 500
    };

    return <Plot data={data} layout={layout} />;
  };
  return phonyData ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
};

export default PieChart;
