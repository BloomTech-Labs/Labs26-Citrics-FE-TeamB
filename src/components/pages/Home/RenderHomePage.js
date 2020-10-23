//Library imports
import React from "react";
import { Typography, Card, Button } from "antd";
import { connect } from "react-redux";
import { openDrawer } from "../../../state/actions";
//icons
import {
  EnvironmentFilled,
  CloudFilled,
  ProfileFilled,
  EyeFilled
} from "@ant-design/icons";

const { Text } = Typography;

function RenderHomePage({ openDrawer }) {
  return (
    <>
      {/* This div contains the background image */}
      <div className="home-container" role="img" />
      <Card className="title-card">
        <h1>Citrics</h1>
        <h2>One-stop for City Metrics!</h2>
        <br />
        <div className="bullet-points">
          <EnvironmentFilled />
          &nbsp;<Text>Search for a city</Text>
          <br />
          <CloudFilled />
          &nbsp;<Text>View popular metrics</Text>
          <br />
          <ProfileFilled />
          &nbsp;<Text>Compare with other cities</Text>
          <br />
          <EyeFilled />
          &nbsp;<Text>View future predictions</Text>
        </div>

        <br />
        <Button
          type="primary"
          className="GSbutton"
          onClick={() => openDrawer()}
        >
          Get Started
        </Button>
      </Card>
    </>
  );
}
export default connect(null, { openDrawer })(RenderHomePage);
