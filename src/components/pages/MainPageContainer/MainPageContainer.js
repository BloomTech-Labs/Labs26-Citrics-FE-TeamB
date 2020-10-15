import React from "react";
import { connect } from "react-redux";
import drawerWidth from "../Nav/drawerWidth";
import useWidth from "../../../hooks/useWidth";
export const baseMargin = 0;

function MainPageContainer({ children, isOpen }) {
  let width = useWidth();

  const marginLeft =
    isOpen && width > 1000
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
