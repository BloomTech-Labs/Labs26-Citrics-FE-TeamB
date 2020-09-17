import React from "react";
import { connect } from "react-redux";
import drawerWidth from "../Nav/drawerWidth";
export const baseMargin = 10;
function MainPageContainer({ children, isOpen }) {
  const marginLeft = isOpen
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
