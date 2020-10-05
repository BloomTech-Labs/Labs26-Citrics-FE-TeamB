import React from "react";
import { Skeleton } from "antd";
export default function LoadingSkeleton() {
  return (
    <div style={{ minWidth: "400px" }}>
      {" "}
      <Skeleton title={false} paragraph={{ rows: 3 }} />
    </div>
  );
}
