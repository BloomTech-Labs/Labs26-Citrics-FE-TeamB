import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import LoadingComponent from "../../common/LoadingComponent";

const BarGraph = ({ city, city2, city3 }) => {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    if (city) {
      setData(city);
    } else {
      setData(null);
    }
    if (city2) {
      setData2(city2);
    } else {
      setData2(null);
    }
    if (city3) {
      setData3(city3);
    } else {
      setData3(null);
    }
  }, [city, city2, city3]);
  const renderGraph = () => {
    let trace2, trace3;

    let trace1 = {
      x: data.plotX,
      y: data.plotY,
      type: "bar",
      name: data.state,
      marker: {
        color: "rgb(49,130,189)",
        opacity: 0.7
      }
    };
    if (data2) {
      trace2 = {
        x: data2.plotX,
        y: data2.plotY,
        type: "bar",
        name: data2.state,
        marker: {
          color: "rgb(247, 77, 77,.5)",
          opacity: 0.5
        }
      };
    }
    if (data3) {
      trace3 = {
        x: data3.plotX,
        y: data3.plotY,
        type: "bar",
        name: data3.state,
        marker: {
          color: "rgb(158,202,225)",
          opacity: 0.5
        }
      };
    }
    let dataPlot = [trace1, data2 ? trace2 : {}, data3 ? trace3 : {}];

    let layout = {
      title: city.graphName,
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      yaxis: {
        showgrid: false
      },
      xaxis: {
        showgrid: false,
        tickangle: -45
      },
      font: {
        size: 14,
        color: "rgba(245,246,249,1)"
      },
      showlegend: false,
      barmode: "group"
    };

    return <Plot data={dataPlot} layout={layout} />;
  };
  return data ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
};

export default BarGraph;
