import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";

import RenderNav from "./RenderNav";

function NavContainer({ isOpen, toggleDrawer }) {
  useEffect(() => {
    let width = window.innerWidth;
    // On load, if width is less than 1000, close drawer
    if (width < 1000) toggleDrawer();

    // Event handler for window resizing
    function handleResize() {
      // If we crossed the 100px threshold
      if ((width < 1000) ^ (window.innerWidth < 1000)) {
        toggleDrawer();
        width = window.innerWidth;
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggleDrawer]);

  return <RenderNav isOpen={isOpen} toggleDrawer={toggleDrawer} />;
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
