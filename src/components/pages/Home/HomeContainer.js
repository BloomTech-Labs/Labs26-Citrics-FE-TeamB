import React from "react";

import RenderHomePage from "./RenderHomePage";

function HomeContainer({ LoadingComponent }) {
  return (
    <div className="home-container" role="img">
      <RenderHomePage />
    </div>
  );
}

export default HomeContainer;
