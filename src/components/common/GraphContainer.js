import React from "react";
import axios from "axios";
import Plot from "react-plotly.js";

export default function GraphContainer() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        "https://citrics-teamb.eba-tpd2j3wp.us-west-1.elasticbeanstalk.com/viz/CA"
      )
      .then(({ data }) => setData(JSON.parse(data).data));
  }, []);
  return data ? <Plot data={data} /> : <div />;
}
