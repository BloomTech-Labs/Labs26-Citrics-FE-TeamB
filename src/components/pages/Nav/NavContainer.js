import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";

import RenderNav from "./RenderNav";

function NavContainer({ isOpen, toggleDrawer }) {
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

  useEffect(() => {
    width < 1000 && toggleDrawer();
  }, [width]);

  return <RenderNav isOpen={isOpen} toggleDrawer={toggleDrawer} />;
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
