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
        ...data,
        automargin: true,
        hoverinfo: "label",
        textinfo: "percent",
        insidetextorientation: "radial"
      }
    ];
    const layout = {
      showlegend: true,
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
          <h3>Top 10 Industries</h3>
          <div className="job-charts">{renderPie()}</div>
        </div>
      </div>
    </div>
  );
}
