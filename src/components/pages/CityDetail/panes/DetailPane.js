import React from "react";
import Graph from "../../../common/Graphs/renderGraph";
// import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";

export default function DetailPane({ Icon, GraphIcon, graphData, children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleGraph = () => {
    console.log("Toggle");
    setIsOpen(!isOpen);
  };
  return (
    <div className="one-render-p">
      <Icon />
      {
        children /*This is where the child component (a specific type of pane) is rendered.*/
      }
      <br />
      {graphData && (
        <div className={"graph-icons"}>
          <RightOutlined
            onClick={toggleGraph}
            className="graph-toggle"
            rotate={isOpen ? 90 : 0}
          />
          {isOpen ? graphData.graphName : <GraphIcon className="graph-icon" />}
        </div>
      )}
      {isOpen && <Graph dataSet={graphData} />}
    </div>
  );
}
