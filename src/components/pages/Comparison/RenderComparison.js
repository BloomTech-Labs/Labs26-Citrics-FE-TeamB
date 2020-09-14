import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import ModalComponent from "../../common/Modal.js";

const RenderComparison = ({ citiesData }) => {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState({});

  const toggleModal = cityData => {
    setCity(cityData);
    // Toggles the modal to open
    setVisible(true);
  };

  // Iterates through the cities state and renders the card per city
  const renderCard = () => {
    const cities = [];
    for (const data in citiesData) {
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
              <h3>city name: {citiesData[data].name}</h3>
              <p>state: {citiesData[data].state}</p>
              <p>population: {citiesData[data].pop}</p>
              <p>rental: {citiesData[data].rental}</p>
              <p>weather: {citiesData[data].weather}</p>
              <Button
                type="primary"
                onClick={() => toggleModal(citiesData[data])}
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
      {Object.keys(citiesData).length < 2 ? (
        // Place holder redirect for now, should redirect to the single details page or something else later
        <Redirect to="/" />
      ) : (
        <>
          <div className="card-container">{renderCard()}</div>
          <ModalComponent
            visible={visible}
            setVisible={setVisible}
            city={city}
          />
        </>
      )}
    </>
  );
};

// Map State to props
const mapState = state => ({
  citiesData: state.cities.cityDetails
});
export default connect(mapState, null)(RenderComparison);
