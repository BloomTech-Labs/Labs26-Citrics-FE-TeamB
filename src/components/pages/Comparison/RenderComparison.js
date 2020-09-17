import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Card, Button } from "antd";
import { connect } from "react-redux";
import ModalComponent from "../../common/Modal.js";

const RenderComparison = ({ selectedCities, cityDetails }) => {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState({});
  const citiesData = selectedCities.map(({ id }) => cityDetails[id]);
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
          </Card>
        </div>
      );
    }
    return cities;
  };
  return (
    <>
      {selectedCities.length < 2 ? (
        // Redirect to a detail page if there is one city selected
        selectedCities.length === 1 ? (
          <Redirect to={`/city-detail-page/${selectedCities[0].id}`} />
        ) : (
          // Redirect to home if no city is selected
          <Redirect to="/" />
        )
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
const mapState = ({ cities: { selectedCities, cityDetails } }, props) => ({
  ...props,
  selectedCities,
  cityDetails
});
export default connect(mapState, null)(RenderComparison);
