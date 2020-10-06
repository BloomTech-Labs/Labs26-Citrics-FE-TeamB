import React from "react";
import { CarOutlined } from "@ant-design/icons";

import Plot from "react-plotly.js";

export default function JobsPane({ jobs }) {
  console.log(jobs, "job industry");

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
      title: "Top 10 Industries",
      showlegend: true,
      legend: { x: -10.4, font: { size: "10px" } },
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
    return (
      <Plot
        data={pieData}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
        config={{ responsive: true }}
      />
    );
  };

  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <CarOutlined className="detail-pane-icon" />
          <h2>Jobs:</h2>
        </div>
        <div className="job-info-container">
          <div className="job-charts">{renderPie()}</div>
        </div>
      </div>
    </div>
  );
}
