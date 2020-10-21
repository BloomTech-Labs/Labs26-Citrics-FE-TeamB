import React from "react";
import { Skeleton } from "antd";
// This LoadingSkeleton is configured to work with the panes in CityDetail
export default function LoadingSkeleton() {
  return (
    // Without a minWidth div wrapper, the Skeleton would collapse to zero width
    <div style={{ minWidth: "400px" }}>
      <Skeleton active title={false} paragraph={{ rows: 3 }} />
    </div>
  );
}
