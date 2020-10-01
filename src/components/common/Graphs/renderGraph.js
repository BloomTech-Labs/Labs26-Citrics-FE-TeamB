import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import LoadingComponent from "../../common/LoadingComponent";

import { lineGraph, barGraph, pieChart, table } from "./graphType";

export default function Graph({ dataSet, dataSet2, dataSet3 }) {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  useEffect(() => {
    if (dataSet) {
      setData(dataSet);
    } else {
      setData(null);
    }
    if (dataSet2) {
      setData2(dataSet2);
    } else {
      setData2(null);
    }
    if (dataSet3) {
      setData3(dataSet3);
    } else {
      setData3(null);
    }
  }, [dataSet, dataSet2, dataSet3]);

  const renderGraph = () => {
    let config = { responsive: true };
    let style = { width: "100%", height: "100%" };
    if (data.type === "line") {
      const { dataPlot, layout } = lineGraph(data, data2, data3);
      return (
        <Plot data={dataPlot} layout={layout} config={config} style={style} />
      );
    } else if (dataSet.type === "bar") {
      const { dataPlot, layout } = barGraph(data, data2, data3);
      return (
        <Plot data={dataPlot} layout={layout} config={config} style={style} />
      );
    } else if (dataSet.type === "pie") {
      const { pieData, layout } = pieChart(data);
      return (
        <Plot data={pieData} layout={layout} config={config} style={style} />
      );
    } else if (dataSet.type === "table") {
      const { tableData, layout } = table(data);
      return <Plot data={tableData} layout={layout} style={style} />;
    }
  };

  return data ? (
    renderGraph()
  ) : (
    <LoadingComponent message={"Retrieving Graph Data... "} />
  );
}
