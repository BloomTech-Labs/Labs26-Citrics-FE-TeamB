import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { openDrawer, closeDrawer, toggleDrawer } from "../../../state/actions";

import { mobileCutoff } from "../../common/constants";
import RenderNav from "./RenderNav";

function NavContainer({ isOpen, openDrawer, closeDrawer, toggleDrawer }) {
  // Keep track of whether we're showing the mobile or desktop view
  const [isMobile, setMobileView] = useState(window.innerWidth < mobileCutoff);
  useEffect(() => {
    // width is used to track the most recent width in handleResize
    // It's kept alive by this closure
    let width = window.innerWidth;
    // On load, if width is less than mobileCutoff, close drawer
    if (width < mobileCutoff) closeDrawer();

    // Event handler for window resizing
    function handleResize() {
      // Open if we went from mobile view to desktop view
      if (width < mobileCutoff && window.innerWidth > mobileCutoff) {
        setMobileView(false);
        openDrawer();
        // Close if we went from desktop view to mobile view
      } else if (width > mobileCutoff && window.innerWidth < mobileCutoff) {
        setMobileView(true);
        closeDrawer();
      }
      width = window.innerWidth;
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [openDrawer, closeDrawer]);

  return (
    <RenderNav
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
      isMobile={isMobile}
    />
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
