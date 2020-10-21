import React from "react";

import RenderHomePage from "./RenderHomePage";

function HomeContainer(props) {
  React.useEffect(() => {
    document.title = "Citrics";
  }, []);
  return <RenderHomePage />;
}

export default HomeContainer;
