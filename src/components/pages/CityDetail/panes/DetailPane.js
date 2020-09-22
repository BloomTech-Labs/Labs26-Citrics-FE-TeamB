import React from "react";
import Graph from "../../../common/Graphs/renderGraph";

export default function DetailPane({ Icon, graphData, children }) {
  return (
    <div>
      <Icon />
      {children}
      {graphData && <Graph dataSet={graphData} />}
    </div>
  );
}
