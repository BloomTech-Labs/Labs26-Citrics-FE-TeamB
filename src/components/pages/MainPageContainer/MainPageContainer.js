import React from "react";
import { connect } from "react-redux";
import drawerWidth from "../Nav/drawerWidth";

function MainPageContainer({ children, isOpen }) {
  const baseMargin = 10;
  const marginLeft = isOpen
    ? `${drawerWidth + baseMargin}px`
    : `${baseMargin}px`;
  return <div style={{ marginLeft }}>{children}</div>;
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, {})(MainPageContainer);
