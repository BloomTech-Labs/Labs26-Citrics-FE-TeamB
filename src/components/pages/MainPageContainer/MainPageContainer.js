import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import drawerWidth from "../Nav/drawerWidth";

export const baseMargin = 0;
function MainPageContainer({ children, isOpen }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    function handleResize() {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
      // change width from the state object after 500 milliseconds
      timeoutId = setTimeout(() => setWidth(window.innerWidth), 500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const marginLeft =
    isOpen && width > 1000
      ? `${drawerWidth + baseMargin}px`
      : `${baseMargin}px`;
  return (
    <div data-testid="main-page-container" style={{ marginLeft }}>
      {children}
    </div>
  );
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, {})(MainPageContainer);
