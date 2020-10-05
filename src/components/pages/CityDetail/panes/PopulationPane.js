import React from "react";
import Plot from "react-plotly.js";
import { TeamOutlined } from "@ant-design/icons";
import { lineGraph, barGraph } from "../../../common/Graphs/graphType";

export default function PopulationPane({ population }) {
  let style = { width: "100%", height: "100%" };
  const generateAgeGraph = () => {
    const ageGroups = Object.keys(population.data).filter(keys => {
      return keys.includes("age");
    });
    const groupPercent = Object.keys(population.data)
      .filter(keys => {
        return keys.includes("age");
      })
      .map(ageGroup => {
        return population.data[ageGroup];
      });
    const { dataPlot, layout } = barGraph({
      name: "%",
      plotX: ageGroups,
      plotY: groupPercent,
      graphName: "Age groups"
    });
    return (
      <Plot
        data={dataPlot}
        layout={{ ...layout, showlegend: false }}
        style={style}
      />
    );
  };
  const generateTrendGraph = () => {
    const { dataPlot, layout } = lineGraph({
      name: "",
      plotX: JSON.parse(population.viz).data[0].x,
      plotY: JSON.parse(population.viz).data[0].y,
      graphName: "Population Trend"
    });
    return (
      <Plot
        data={dataPlot}
        layout={{ ...layout, showlegend: false }}
        style={style}
      />
    );
  };
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <TeamOutlined className="detail-pane-icon" />
          <h2>Population:</h2>
        </div>
        <div>
          <div className="population-graph-container">
            <div className="population-graph">{generateAgeGraph()}</div>
            <div className="population-graph">{generateTrendGraph()}</div>
          </div>
          <p>
            Total Population:{" "}
            <span>{population.data.total_pop.toLocaleString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
