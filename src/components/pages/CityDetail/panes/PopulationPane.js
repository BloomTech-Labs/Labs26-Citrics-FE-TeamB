import React from "react";
import { TeamOutlined } from "@ant-design/icons";
import LoadingSkeleton from "./LoadingSkeleton";

export default function PopulationPane({ population }) {
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div>
          <h2>Population:</h2>
          <TeamOutlined className="detail-pane-icon" />
        </div>
        <div className="population-pane">
          {population ? (
            <>
              {/* This JSX fragment contains everything shown while not loading */}
              {population.data.total_pop.toLocaleString()}
            </>
          ) : (
            <LoadingSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}
