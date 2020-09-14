//Library imports
import React from "react";
import { Typography, Card, Button } from "antd";
import { connect } from "react-redux";
import { toggleDrawer } from "../../../state/actions";

//Styling
import "./styles.css";
const { Title, Text } = Typography;

function RenderHomePage({ toggleDrawer }) {
  const openNav = () => {
    // console.log("Opening Nav");
    toggleDrawer();
  };
  return (
    <>
      <div className="background-image" />
      <Card className="title-card">
        <Title>Citrics</Title>
        <Text>Your one stop for city metrics!</Text>
        <Button type="primary" onClick={openNav}>
          Get Started
        </Button>
      </Card>
    </>
  );
}
const mapPropsToState = (reduxProps, props) => props;
export default connect(mapPropsToState, { toggleDrawer })(RenderHomePage);
