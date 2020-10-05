import React from "react";
import { Skeleton } from "antd";
export default function LoadingSkeleton() {
  return <Skeleton title={false} paragraph={{ rows: 3 }} />;
}
