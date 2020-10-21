import React from "react";
import Plot from "react-plotly.js";
import LoadingSkeleton from "../../common/LoadingSkeleton";

import { lineGraph, barGraph, table } from "./graphType";

export default function Graph({ dataSet, dataSet2, dataSet3 }) {
  const renderGraph = () => {
    let style = { width: "100%", height: "100%" };
    if (dataSet.type === "line") {
      const { dataPlot, layout } = lineGraph(dataSet, dataSet2, dataSet3);
      return <Plot data={dataPlot} layout={layout} style={style} />;
    } else if (dataSet.type === "bar") {
      const { dataPlot, layout } = barGraph(dataSet, dataSet2, dataSet3);
      return <Plot data={dataPlot} layout={layout} style={style} />;
    } else if (dataSet.type === "table") {
      const { tableData, layout } = table(dataSet);
      return (
        <Plot
          data={tableData}
          layout={layout}
          style={style}
          config={{ responsive: true }}
        />
      );
    }
  };

  return dataSet ? renderGraph() : <LoadingSkeleton />;
}
