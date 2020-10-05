import React from "react";
import { CarOutlined } from "@ant-design/icons";
import LoadingSkeleton from "./LoadingSkeleton";

export default function JobsPane({ jobs }) {
  return (
    <div className="one-render-p">
      <div className="main-detail-content">
        <div>
          <h2>Jobs:</h2>
          <CarOutlined className="detail-pane-icon" />
        </div>
        {jobs ? (
          <>
            {/* This JSX fragment contains everything shown while not loading */}
            "Jobs not implemented yet!"
          </>
        ) : (
          <LoadingSkeleton />
        )}
      </div>
    </div>
  );
}
