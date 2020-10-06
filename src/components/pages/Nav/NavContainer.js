import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";

import RenderNav from "./RenderNav";

function NavContainer({ isOpen, toggleDrawer }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 1000 && toggleDrawer();
  }, [width, toggleDrawer]);

  return <RenderNav isOpen={isOpen} toggleDrawer={toggleDrawer} />;
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
