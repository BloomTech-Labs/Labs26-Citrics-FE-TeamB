import React from "react";
import axios from "axios";
import Plot from "react-plotly.js";
import LoadingComponent from "../common/LoadingComponent";
export default function GraphContainer({ state, state2, state3 }) {
  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);
  const [data3, setData3] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://b-ds.citrics.dev/viz/${state}`)
      .then(({ data }) => setData(JSON.parse(data).data));
    if (state2) {
      axios
        .get(`https://b-ds.citrics.dev/viz/${state2}`)
        .then(({ data }) => setData2(JSON.parse(data).data));
    }
    if (state3) {
      axios
        .get(`https://b-ds.citrics.dev/viz/${state3}`)
        .then(({ data }) => setData3(JSON.parse(data).data));
    }
  }, [state, state2, state3]);

  const renderGraph = () => {
    let trace2, trace3;

    let trace1 = {
      x: data[0].x,
      y: data[0].y,
      line: { color: "rgb(219, 74, 42)" },
      mode: "lines",
      name: state,
      type: "scatter"
    };
    if (data2) {
      trace2 = {
        x: data2[0].x,
        y: data2[0].y,
        line: { color: "rgb(34, 112, 180)" },
        mode: "lines",
        name: state2 ? state2 : "State 2"
      };
    }
    if (data3) {
      trace3 = {
        x: data3[0].x,
        y: data3[0].y,
        line: { color: "rgb(28, 235, 43)" },
        mode: "lines",
        name: state3 ? state3 : "state 3"
      };
    }

    let dataPlot = [trace1, data2 ? trace2 : {}, data3 ? trace3 : {}];
    let layout = {
      showlegend: true,
      title: "Unemployment Rate"
    };
    return <Plot data={dataPlot} layout={layout} />;
  };

  return data ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
}
