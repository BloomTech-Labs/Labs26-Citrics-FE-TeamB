import React, { useState } from "react";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import ModalComponent from "../../common/Modal.js";

import { singleCityDetail } from "../../../state/actions/cityActions";
const dummyData = {
  123: {
    name: "city1",
    state: "state1",
    pop: 5462312,
    rental: 2131,
    weather: 32
  },
  133: {
    name: "city2",
    state: "state2",
    pop: 5462312,
    rental: 2131,
    weather: 32
  },
  124: {
    name: "city3",
    state: "state3",
    pop: 5462312,
    rental: 2131,
    weather: 32
  }
};
const RenderComparison = ({ singleCityDetail }) => {
  const [visible, setVisible] = useState(false);
  // const [citySelected, setCitySelected] = useState({});

  const toggleModal = cityData => {
    singleCityDetail(cityData);
    setVisible(true);
  };

  // Iterates through the cities state and renders the card per city
  const renderCard = () => {
    const cities = [];
    for (const data in dummyData) {
      cities.push(
        <div className="card" key={data}>
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
              <Button
                type="primary"
                onClick={() => toggleModal(dummyData[data])}
              >
                More Info
              </Button>
            </div>
          </Card>
        </div>
      );
    }
    return cities;
  };
  return (
    <>
      <div className="card-container">{renderCard()}</div>
      <ModalComponent visible={visible} setVisible={setVisible} />
    </>
  );
};
const actions = {
  singleCityDetail
};
export default connect(null, actions)(RenderComparison);
