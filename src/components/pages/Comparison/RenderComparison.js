import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";

const dummyData = {
  123: {
    city: "city1",
    state: "state1",
    pop: 5462312,
    rental: 2131,
    weather: 32
  },
  133: {
    city: "city2",
    state: "state2",
    pop: 5462312,
    rental: 2131,
    weather: 32
  },
  124: {
    city: "city3",
    state: "state3",
    pop: 5462312,
    rental: 2131,
    weather: 32
  }
};
const RenderComparison = props => {
  const renderCard = () => {
    const cities = [];
    for (const data in dummyData) {
      cities.push(
        <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">
            <img
              alt="example"
              width="100%"
              src="https://i.imgur.com/YXdssOR.jpeg"
            />
          </div>
          <div className="custom-card">
            <h3>city name: {dummyData[data].city}</h3>
            <p>state: {dummyData[data].state}</p>
            <p>population: {dummyData[data].pop}</p>
            <p>rental: {dummyData[data].rental}</p>
            <p>weather: {dummyData[data].weather}</p>
          </div>
        </Card>
      );
    }
    return cities;
  };
  return (
    <>
      <div className="card-container">{renderCard()}</div>
    </>
  );
};

export default connect(null, null)(RenderComparison);
