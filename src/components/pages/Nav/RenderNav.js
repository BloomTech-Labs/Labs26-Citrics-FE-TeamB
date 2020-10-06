// Library imports
import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

//Subcomponents
import { SearchBar } from "../SearchBar";
import { SelectedCities } from "../SelectedCities/";

//Configuration
// This defines the width of the drawer *and* how far to translate the floating button
import drawerWidth from "./drawerWidth";

export default function RenderNav({ toggleDrawer, isOpen }) {
  const buttonTransform = isOpen ? `translate(${drawerWidth}px,0px)` : "";
  //for media query (see ternary below)--allows floating button to slide in and out with the nav
  const reverseButtonTransform = !isOpen
    ? `translate(${drawerWidth}px,0px)`
    : "";

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    width < 1000 && handleSideNavToggle();
  }, [width]);

  function handleSideNavToggle() {
    console.log("toggle it");
  }

  return (
    <div className="navbar">
      {/* media query--changing the toggle to be shut if screen sidth is 1000px or less */}
      {width > 1000 ? (
        <>
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
            <br />
            <br />
            <br />

            <SelectedCities />
          </Drawer>
        </>
      ) : (
        <>
          <Button
            className="floating-visibility-button"
            data-testid="floating-visibility-button"
            type="secondary"
            onClick={toggleDrawer}
            style={{ transform: reverseButtonTransform }}
          >
            {!isOpen ? <DoubleLeftOutlined /> : <DoubleRightOutlined />}
          </Button>
          <Drawer
            title="City Search"
            placement="left"
            closable={false}
            onClose={toggleDrawer}
            visible={!isOpen}
            mask={false}
            width={drawerWidth}
          >
            <SearchBar />
            <br />
            <br />
            <br />

            <SelectedCities />
          </Drawer>
        </>
      )}
    </div>
  );
}
