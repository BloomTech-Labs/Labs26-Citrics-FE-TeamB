import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openDrawer, closeDrawer, toggleDrawer } from "../../../state/actions";

import RenderNav from "./RenderNav";

function NavContainer({ isOpen, openDrawer, closeDrawer, toggleDrawer }) {
  const [isClosed, setClosed] = useState();
  useEffect(() => {
    let width = window.innerWidth;
    // On load, if width is less than 1000, close drawer
    if (width < 1000) closeDrawer();

    // Event handler for window resizing
    function handleResize() {
      // Open if we went from mobile view to desktop view
      if (width < 1000 && window.innerWidth > 1000) {
        setClosed(false);
        openDrawer();
        // Close if we went from desktop view to mobile view
      } else if (width > 1000 && window.innerWidth < 1000) {
        setClosed(true);
        closeDrawer();
      }
      width = window.innerWidth;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openDrawer, closeDrawer]);

  return (
    <RenderNav isOpen={isOpen} toggleDrawer={toggleDrawer} closed={isClosed} />
  );
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, {
  openDrawer,
  closeDrawer,
  toggleDrawer
})(NavContainer);
