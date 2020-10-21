import React from "react";
import { lineGraph } from "../../Graphs/graphType";
import Plot from "react-plotly.js";
import LoadingSkeleton from "../../LoadingSkeleton";
import useWidth from "../../../../hooks/useWidth";
//icon
import jobIcon from "../../../../styles/icons/jobs-96.png";

export default function JobsPane({ jobs, unemployment, insideModal }) {
  // The breakpoint where the pie chart switches
  // from next the legend to beneath the legend.
  // If we're inside a modal, the width is narrower, so this cutoff changes
  const mobileCutoff = insideModal ? 840 : 780;
  let style = { width: "100%", height: "100%" };
  let width = useWidth();

  // function that parses and renders the given pie chart
  const renderPie = () => {
    const data = JSON.parse(jobs.viz).data[0];
    const pieData = [
      {
        // additional properties for pie chart
        ...data,
        domain: { x: [1, 0] },
        automargin: true,
        hoverinfo: "label",
        textinfo: "percent",
        insidetextorientation: "radial"
      }
    ];
    // custom layout for pie chart
    const layout = {
      title: width < mobileCutoff ? "" : "Top Industries",
      showlegend: true,
      legend:
        width < mobileCutoff
          ? {
              orientation: "h",
              y: 1.0,
              yanchor: "bottom",
              x: 0.5,
              xanchor: "center"
            }
          : { x: -10.4, font: { size: "10px" } },
      paper_bgcolor: "transparent",
      plot_bgcolor: "transparent",
      yaxis: {
        showgrid: false
      },
      xaxis: {
        showgrid: false
      },
      autosize: true
    };
    return <Plot data={pieData} layout={layout} style={style} />;
  };
  const generateTrendGraph = () => {
    const { dataPlot, layout } = lineGraph({
      name: "",
      plotX: JSON.parse(unemployment.viz).data[0].x,
      plotY: JSON.parse(unemployment.viz).data[0].y,
      graphName: "Unemployment Rate",
      xLabel: "Year",
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
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <img
            className="detail-pane-icon"
            src={jobIcon}
            alt="briefcase to represent the job industry icon"
          />
          <h2>Jobs:</h2>
        </div>
        {jobs && unemployment ? (
          <div className="job-info-container">
            <div className="job-charts">{renderPie()}</div>
            <div className="job-charts-unemploy">{generateTrendGraph()}</div>
          </div>
        ) : (
          <LoadingSkeleton minWidth="400px" />
        )}
      </div>
    </div>
  );
}
