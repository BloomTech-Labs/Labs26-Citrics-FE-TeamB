import React from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export default function GraphContainer({ state }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        `http://citrics-teamb.eba-tpd2j3wp.us-west-1.elasticbeanstalk.com/viz/${state}`
      )
      .then(({ data }) => setData(JSON.parse(data).data));
  }, [state]);
  return data ? <Plot data={data} /> : <div />;
}
