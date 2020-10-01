import React from "react";
import { TeamOutlined } from "@ant-design/icons";

export default function PopulationPane({ population }) {
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div>
          <h2>Population:</h2>
          <TeamOutlined className="detail-pane-icon" />
        </div>
        {population.data.total_pop.toLocaleString()}
      </div>
    </div>
  );
}
