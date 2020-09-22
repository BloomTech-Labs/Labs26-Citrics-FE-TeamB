import React from "react";
import Graph from "../../../common/Graphs/renderGraph";

export default function DetailPane({ Icon, graphData, children }) {
  return (
    <div className="one-render-p">
      <Icon />
      {
        children /*This is where the child component (a specific type of pane) is rendered.*/
      }
      {/* TODO: Show and hide graph */}
      {graphData && <Graph dataSet={graphData} />}
    </div>
  );
}
