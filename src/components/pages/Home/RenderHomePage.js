import React from "react";
import "./styles.css";
import { Typography, Card } from "antd";
const { Title } = Typography;

function RenderHomePage(props) {
  return (
    <>
      <div className="background-image" />
      <Card className="title-card">
        <Title>Citrics</Title>
      </Card>
    </>
  );
}
export default RenderHomePage;
