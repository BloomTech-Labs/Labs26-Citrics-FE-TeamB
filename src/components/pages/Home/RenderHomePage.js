import React from "react";
import "./styles.css";
import { Typography, Card } from "antd";
const { Title, Text } = Typography;

function RenderHomePage(props) {
  return (
    <>
      <div className="background-image" />
      <Card className="title-card">
        <Title>Citrics</Title>
        <Text>Your one stop for city metrics!</Text>
      </Card>
    </>
  );
}
export default RenderHomePage;
