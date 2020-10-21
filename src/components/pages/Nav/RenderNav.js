// Library imports
import React from "react";
import { Link } from "react-router-dom";
import { Drawer, Button } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

//Subcomponents
import { SearchBar } from "../SearchBar";
import { SelectedCities } from "../SelectedCities/";

//Configuration
// This defines the width of the drawer *and* how far to translate the floating button
import { drawerWidth } from "../../common/constants";

export default function RenderNav({ toggleDrawer, isOpen, isMobile }) {
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
        // Apply a mask if we are in mobile view
        mask={isMobile}
        width={drawerWidth}
      >
        <div className="component-container">
          <SearchBar />
          <br />
          <br />
          <br />
          <br />

          <SelectedCities />
        </div>
        <div className="footer-container">
          <div className="footer">
            <Link to="/about">
              <Button type="primary" className="about-btn">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
