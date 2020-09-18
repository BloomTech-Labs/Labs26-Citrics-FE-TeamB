import React, { useState } from "react";
import { Card, Button } from "antd";
import ModalComponent from "../../common/Modal.js";
import LoadingComponent from "../../common/LoadingComponent.js";

export default function RenderComparison({ citiesData }) {
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
          <Card
            style={{ width: 240 }}
            bodyStyle={{ padding: 0 }}
            data-testid="city-cards"
          >
            <div className="custom-image">
              <img
                alt="example"
                width="100%"
                src="https://i.imgur.com/YXdssOR.jpeg"
              />
            </div>
            {!citiesData[data] ? (
              <LoadingComponent message="Loading city data..." />
            ) : (
              <div className="custom-card">
                <h3>city name: {citiesData[data].name}</h3>
                <p>state: {citiesData[data].state}</p>
                <p>population: {citiesData[data].population}</p>
                <p>rental: {citiesData[data].rent}</p>
                <p>weather: {citiesData[data].weather}</p>
                <Button
                  data-testid="more-info-btn"
                  type="primary"
                  onClick={() => toggleModal(citiesData[data])}
                >
                  More Info
                </Button>
              </div>
            )}
          </Card>
        </div>
      );
    }
    return cities;
  };
  return (
    <>
      <div className="card-container">{renderCard()}</div>
      <ModalComponent visible={visible} setVisible={setVisible} city={city} />
    </>
  );
}
