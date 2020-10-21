import React from "react";
import { Skeleton } from "antd";
export default function LoadingSkeleton({
  rows = 3,
  minWidth = 0,
  title = false
}) {
  return (
    // Without a minWidth div wrapper, the Skeleton would collapse to zero width
    <div style={{ minWidth }}>
      <Skeleton active title={title} paragraph={{ rows }} />
    </div>
  );
}
