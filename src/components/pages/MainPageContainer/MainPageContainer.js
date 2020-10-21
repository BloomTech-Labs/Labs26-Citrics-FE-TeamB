import React from "react";
import { connect } from "react-redux";
import { drawerWidth, mobileCutoff } from "../../common/constants";
import useWidth from "../../../hooks/useWidth";
export const baseMargin = 0;

function MainPageContainer({ children, isOpen }) {
  let width = useWidth();

  // Move the wrapper div to the right to make space for the navigation drawer
  // if the drawer is open and our screen width indicates we're on desktop
  const marginLeft =
    isOpen && width > mobileCutoff
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
