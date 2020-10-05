import React from "react";
import { CarOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import Plot from "react-plotly.js";

export default function JobsPane({ jobs }) {
  console.log(jobs, "job industry");

  // function that renders top 10 job industries
  const renderJobTags = () => {
    // helper function to build keys to filter
    const helperFunc = (str = "job_ranked_") => {
      const allowed = [];
      for (let i = 1; i < 11; i++) {
        allowed.push(`${str}${i}`);
      }
      return allowed;
    };
    const filterdJobKeys = helperFunc();
    // filters the job keys creating an array of the values for given key
    const topJobArray = Object.keys(jobs.data)
      .filter(keys => filterdJobKeys.includes(keys))
      .map(jobValue => {
        return jobs.data[jobValue];
      });

    // color array to randomly choose from everytime a tag component is created
    const colors = [
      "magenta",
      "red",
      "volcano",
      "orange",
      "gold",
      "lime",
      "green",
      "cyan",
      "blue",
      "geekblue",
      "purple"
    ];
    return topJobArray.map((jobName, indx) => {
      return (
        <Tag
          color={colors[Math.floor(Math.random() * colors.length)]}
          key={indx}
        >
          {jobName}
        </Tag>
      );
    });
  };

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
      title: "Top Industry",
      showlegend: false,
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
          <div className="job-tags">{renderJobTags()}</div>
          <div className="job-charts">{renderPie()}</div>
        </div>
      </div>
    </div>
  );
}
