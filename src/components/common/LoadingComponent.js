import PropTypes from "prop-types";
import React from "react";

function LoadingComponent(props) {
  const { message } = props;

  return (
    <div data-testid="loadingComp" style={{ color: "white", height: "155vh" }}>
      {message}
    </div>
  );
}

export default LoadingComponent;

LoadingComponent.propTypes = {
  message: PropTypes.string.isRequired
};
