import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

export default function PageNavigation({
  pageNumber,
  setPageNumber,
  totalResults
}) {
  const totalPages = Math.ceil(totalResults / 10);
  console.log(totalResults);

  function goToPreviousPage() {
    if (pageNumber === 0) return;
    setPageNumber(pageNumber - 1);
  }
  function goToNextPage() {
    if (pageNumber === totalPages - 1) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="advanced-search-page-navigation">
      <Button disabled={pageNumber === 0} onClick={goToPreviousPage}>
        <LeftOutlined />
      </Button>
      {`Page ${pageNumber + 1} of ${totalPages}`}
      <Button disabled={pageNumber === totalPages - 1} onClick={goToNextPage}>
        <RightOutlined />
      </Button>
    </div>
  );
}
