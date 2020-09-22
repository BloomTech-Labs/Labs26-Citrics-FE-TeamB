import React from "react";

import RenderHomePage from "./RenderHomePage";

function HomeContainer({ LoadingComponent }) {
  React.useEffect(() => {
    document.title = "Citrics";
  }, []);
  return <RenderHomePage />;
}

export default HomeContainer;
