import React from "react";
import Graph from "../../../common/Graphs/renderGraph";
// import { Collapse } from "antd";
import { RightOutlined } from "@ant-design/icons";
//importing weather icon
import weather from "../../../../styles/icons/weather-96.png";

export default function DetailPane({ Icon, GraphIcon, graphData, children }) {
  // Keep track of whether the graph is open or not
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleGraph = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        {Icon ? (
          <>
            <Icon className="detail-pane-icon" />
            {
              children /*This is where the child component (a specific type of pane) is rendered.*/
            }
          </>
        ) : (
          <>
            <img src={weather} />
            {children}
          </>
        )}
      </div>
      {graphData && (
        // Only render if there is graph data given
        // Show the open/close icon (which rotates) and an icon that matches the type of graph to be shown
        <div className={"graph-icons"}>
          <RightOutlined
            role="button"
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
