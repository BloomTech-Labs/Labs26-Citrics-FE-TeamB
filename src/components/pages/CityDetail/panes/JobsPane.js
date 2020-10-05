import React from "react";
import { CarOutlined } from "@ant-design/icons";
import { Tag } from "antd";

export default function JobsPane({ jobs }) {
  console.log(jobs, "job industry");

  // function that renders top 10 job industries
  const renderJobTags = () => {
    // helper function to build keys to filter
    const helperFunc = (str = "job_ranked_") => {
      const allowed = [];
      for (let i = 1; i < 10; i++) {
        allowed.push(`${str}${i}`);
      }
      return allowed;
    };
    const filterdJobKeys = helperFunc();
    //
    const topJobArray = Object.keys(jobs.data)
      .filter(keys => filterdJobKeys.includes(keys))
      .map(jobValue => {
        return jobs.data[jobValue];
      });

    return topJobArray.map(jobName => {
      return <Tag color={"magenta"}>{jobName}</Tag>;
    });
  };
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div className="detail-header">
          <CarOutlined className="detail-pane-icon" />
          <h2>Jobs:</h2>
        </div>
        <div className="">
          <h3>Top 10 Industries</h3>
          <div className="job-tags">{renderJobTags()}</div>
        </div>
      </div>
    </div>
  );
}
