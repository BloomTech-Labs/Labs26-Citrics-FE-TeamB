// Library imports
import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";
import { Drawer, Button } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

//Subcomponents
import SearchBar from "./SearchBar";
import SelectedCities from "./SelectedCities";

//Styling
import "./styles.css";

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

  return (
    <div className="navbar">
      <Button
        className="floating-visibility-button"
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
      </Drawer>
    </div>
  );
}
const mapPropsToState = ({ drawer: { isOpen } }, props) => ({
  isOpen,
  ...props
});
export default connect(mapPropsToState, { toggleDrawer })(NavContainer);
