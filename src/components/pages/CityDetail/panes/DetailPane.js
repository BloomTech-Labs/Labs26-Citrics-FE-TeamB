import React from "react";
import Graph from "../../../common/Graphs/renderGraph";

export default function DetailPane({ Icon, graphData, children }) {
  return (
    <div className="one-render-p">
      <Icon />
      {children}
      {/* TODO: Show and hide graph */}
      {graphData && <Graph dataSet={graphData} />}
    </div>
  );
}
