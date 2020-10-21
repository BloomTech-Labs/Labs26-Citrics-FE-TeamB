import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import useWidth from "../../../hooks/useWidth";
import { openDrawer, closeDrawer, toggleDrawer } from "../../../state/actions";

import { mobileCutoff } from "../../common/constants";
import RenderNav from "./RenderNav";

function NavContainer({ isOpen, openDrawer, closeDrawer, toggleDrawer }) {
  // Keep track of the previous width
  // to ensure we only change drawer state when passing the mobileCutoff
  const [prevWidth, setPrevWidth] = useState(window.innerWidth);

  // Retrieve a debounced width value from the useWidth hook
  // Also, open/close the nav drawer whenever width passes the cutoff
  // between desktop and mobile views
  const width = useWidth(width => {
    // Open if we went from mobile view to desktop view
    if (prevWidth < mobileCutoff && width > mobileCutoff) {
      openDrawer();
      // Close if we went from desktop view to mobile view
    } else if (prevWidth > mobileCutoff && width < mobileCutoff) {
      closeDrawer();
    }
    // Update prevWidth
    setPrevWidth(width);
  });

  // On component mount, close the drawer if we're on mobile view
  // This function uses innerWidth directly to avoid bugs:
  // using width or prevWidth would cause this logic to fire more than just on component mount
  useEffect(() => {
    if (window.innerWidth < mobileCutoff) closeDrawer();
  }, [closeDrawer]);

  return (
    <RenderNav
      isOpen={isOpen}
      toggleDrawer={toggleDrawer}
      isMobile={width < mobileCutoff}
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
