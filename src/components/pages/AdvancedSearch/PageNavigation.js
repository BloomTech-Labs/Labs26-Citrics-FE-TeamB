import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

export default function PageNavigation({
  pageNumber,
  setPageNumber,
  totalResults
}) {
  // To find the last page, we round up since 61 results is 7 pages
  // then subtract 1 since our page number starts at 0 not 1
  const lastPage = Math.ceil(totalResults / 10) - 1;

  function goToPreviousPage() {
    if (pageNumber === 0) return;
    setPageNumber(pageNumber - 1);
  }
  function goToNextPage() {
    if (pageNumber === lastPage) return;
    setPageNumber(pageNumber + 1);
  }

  return (
    <div className="advanced-search-page-navigation">
      <Button disabled={pageNumber === 0} onClick={goToPreviousPage}>
        <LeftOutlined />
      </Button>
      {/* Page number starts at 0, but we want our display to start at 1 */}
      {`  Page ${pageNumber + 1} of ${lastPage + 1}  `}
      <Button disabled={pageNumber === lastPage} onClick={goToNextPage}>
        <RightOutlined />
      </Button>
    </div>
  );
}
