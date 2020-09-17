import React from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export default function GraphContainer({ state }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(`https://b-ds.citrics.dev/viz/${state}`)
      .then(({ data }) => setData(JSON.parse(data).data))
      .catch(console.error);
  }, [state]);
  return data ? <Plot data={data} /> : <div />;
}
