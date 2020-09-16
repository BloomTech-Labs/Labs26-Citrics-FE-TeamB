// Library imports
import React from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";
import { Drawer, Button } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

//Subcomponents
import SearchBar from "./SearchBar";
import SelectedCities from "./SelectedCities";

function NavContainer({ toggleDrawer, isOpen }) {
  // This defines the width of the drawer *and* how far to translate the floating button
  const drawerWidth = 256;
  // Opens drawer
  const showDrawer = () => {
    toggleDrawer();
  };

  // Closes drawer
  const onClose = () => {
    toggleDrawer();
  };

  //History hook to push to comparison route
  let history = useHistory();
  return (
    <div className="navbar">
      <Button
        className="floating-visibility-button"
        data-testid="floating-visibility-button"
        type="secondary"
        onClick={showDrawer}
        style={{ transform: isOpen ? `translate(${drawerWidth}px,0px)` : "" }}
      >
        {isOpen ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
      </Button>
      <Drawer
        title="City Search"
        placement="left"
        closable={false}
        onClose={onClose}
        visible={isOpen}
        mask={false}
        width={drawerWidth}
      >
        <SearchBar />
        {/* TODO: remove these and clean up formatting of this element */}
        <br />
        <br />
        <br />
        <br />

        <SelectedCities />

        {/* Place holder button - Only redirects to comparison for now */}
        <Button
          data-testid="results-page-button"
          type="primary"
          onClick={() => history.push("/comparison-page")}
        >
          Compare
        </Button>
      </Drawer>
    </div>
  );
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
