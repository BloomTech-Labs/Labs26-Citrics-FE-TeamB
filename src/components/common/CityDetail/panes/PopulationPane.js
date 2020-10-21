import React from "react";
import Plot from "react-plotly.js";
import { lineGraph, barGraph } from "../../Graphs/graphType";
import LoadingSkeleton from "../../LoadingSkeleton";
//icon
import popIcon from "../../../../styles/icons/pop-96.png";

export default function PopulationPane({ population, prediction }) {
  // style object for making the graphs responsive
  let style = { width: "100%", height: "100%" };
  // Functions to generate graphs for age group
  const generateAgeGraph = () => {
    // Creates array for the x axis
    const ageGroups = Object.keys(population.data)
      .filter(keys => {
        return keys.includes("age");
      })
      .map(ageStr => {
        return ageStr
          .replace("age_", "")
          .replace("_", " ")
          .toUpperCase();
      });

    // Creates array for the y axis
    const groupPercent = Object.keys(population.data)
      .filter(keys => {
        return keys.includes("age");
      })
      .map(ageGroup => {
        return `${population.data[ageGroup]}%`;
      });

    // Uses the function from graphType file to build out the plots
    const { dataPlot, layout } = barGraph({
      name: "",
      plotX: ageGroups,
      plotY: groupPercent,
      graphName: "Age groups",
      yLabel: "Percentage %"
    });
    return (
      <Plot
        data={dataPlot}
        layout={{ ...layout, showlegend: false }}
        style={style}
      />
    );
  };
  // Function to create the trend graph
  const generateTrendGraph = () => {
    const { dataPlot, layout } = lineGraph(
      {
        name: "Current",
        plotX: JSON.parse(prediction.total_pop).data[0].x,
        plotY: JSON.parse(prediction.total_pop).data[0].y,
        graphName: "Population Trend Predictions",
        xLabel: "Year",
        yLabel: "Population Count"
      },
      {
        name: "Average Prediction",
        plotX: JSON.parse(prediction.total_pop).data[1].x,
        plotY: JSON.parse(prediction.total_pop).data[1].y,
        color: JSON.parse(prediction.total_pop).data[1].line.color
      },
      {
        name: "Upper/Lower Predictions",
        plotX: JSON.parse(prediction.total_pop).data[2].x,
        plotY: JSON.parse(prediction.total_pop).data[2].y,
        hoverinfo: JSON.parse(prediction.total_pop).data[2].hoverinfo,
        color: JSON.parse(prediction.total_pop).data[2].line.color,
        fill: JSON.parse(prediction.total_pop).data[2].fill,
        fillcolor: JSON.parse(prediction.total_pop).data[2].fillcolor
      }
    );

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
          <img
            className="detail-pane-icon"
            src={popIcon}
            alt="Population icon, a group of three people"
          />
          <h2>Population:</h2>
        </div>
        {population && prediction ? (
          <div>
            <div className="population-graph-container">
              <div className="population-graph">{generateTrendGraph()}</div>
              <div className="population-graph">{generateAgeGraph()}</div>
            </div>
          </div>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </div>
  );
}
