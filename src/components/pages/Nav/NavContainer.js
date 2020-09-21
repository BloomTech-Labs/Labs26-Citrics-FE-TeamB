import React from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";

import RenderNav from "./RenderNav";

function NavContainer({ isOpen, toggleDrawer }) {
  return <RenderNav isOpen={isOpen} toggleDrawer={toggleDrawer} />;
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
