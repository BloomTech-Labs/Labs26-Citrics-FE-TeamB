import React from "react";
//Styling
import { Carousel } from "antd";

const contentStyle = {
  height: "100px",
  width: "100px",
  color: "white",
  lineHeight: "100px",
  textAlign: "center",
  background: "purple"
};

export default function WeatherPane({ weather }) {
  return (
    <h1>Hello</h1>
    // <Carousel autoplay>
    //   <div>
    //     <h1 style={contentStyle}>WE'RE OVER HERE</h1>
    //   </div>
    //   <div>
    //     <h1 style={contentStyle}>WE'RE OVER HERE</h1>
    //   </div>
    //   <div>
    //     <h1 style={contentStyle}>WE'RE OVER HERE</h1>
    //   </div>
    //   <div>
    //     <h1 style={contentStyle}>WE'RE OVER HERE</h1>
    //   </div>
    // </Carousel>
  );
}
