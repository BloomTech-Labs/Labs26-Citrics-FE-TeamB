// Library imports
import React from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";
import { Drawer, Button } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

//Subcomponents
import { SearchBar } from "../SearchBar";
import SelectedCities from "./SelectedCities";

//Configuration
// This defines the width of the drawer *and* how far to translate the floating button
import drawerWidth from "./drawerWidth";

function NavContainer({ toggleDrawer, isOpen }) {
  const buttonTransform = isOpen ? `translate(${drawerWidth}px,0px)` : "";

  return (
    <div className="navbar">
      <Button
        className="floating-visibility-button"
        data-testid="floating-visibility-button"
        type="secondary"
        onClick={toggleDrawer}
        style={{ transform: buttonTransform }}
      >
        {isOpen ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
      </Button>
      <Drawer
        title="City Search"
        placement="left"
        closable={false}
        onClose={toggleDrawer}
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
      </Drawer>
    </div>
  );
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
