import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import LoadingComponent from "../../common/LoadingComponent";

export default function LineGraph({ state, state2, state3 }) {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    if (state) {
      setData(state);
    } else {
      setData(null);
    }
    if (state2) {
      setData2(state2);
    } else {
      setData2(null);
    }
    if (state3) {
      setData3(state3);
    } else {
      setData3(null);
    }
  }, [state, state2, state3]);

  const renderGraph = () => {
    let trace2, trace3;

    let trace1 = {
      x: data.plotX,
      y: data.plotY,
      line: { color: "rgba(222,45,38,0.8)" },
      mode: "lines",
      name: data.state,
      type: "scatter"
    };
    if (data2) {
      trace2 = {
        x: data2.plotX,
        y: data2.plotY,
        line: { color: "rgb(49,130,189)" },
        mode: "lines",
        name: state2 ? data2.state : "Fix me"
      };
    }
    if (data3) {
      trace3 = {
        x: data3.plotX,
        y: data3.plotY,
        line: { color: "rgb(204,204,204)" },
        mode: "lines",
        name: state3 ? data3.state : "Fix me too"
      };
    }

    let dataPlot = [trace1, data2 ? trace2 : {}, data3 ? trace3 : {}];
    let layout = {
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      yaxis: {
        showgrid: false
      },
      xaxis: {
        showgrid: false
      },
      font: {
        size: 14,
        color: "rgba(245,246,249,1)"
      },

      showlegend: true,
      title: state.graphName
    };
    return <Plot data={dataPlot} layout={layout} />;
  };

  return data ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
}
