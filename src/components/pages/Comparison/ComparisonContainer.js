//Library imports
import React from "react";
import RenderComparison from "./RenderComparison";

//Styling
import "../../../styles/LESS/comparison-page.less";

export default function ComparisonContainer(props) {
  return (
    <div className="comparison-container">
      <RenderComparison />
    </div>
  );
}
