import React, { Component } from "react";
import { Card, Button } from "antd";
import ModalComponent from "../../common/Modal.js";
import LoadingComponent from "../../common/LoadingComponent";

class ComparisonCard extends Component {
  state = {
    visible: false,
    city: {}
  };
  onSelectCity = cityData => {
    this.setState({ city: cityData, visible: true });
  };
  onToggleModal = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { citiesData } = this.props;
    const { onToggleModal, onSelectCity } = this;
    const { visible, city } = this.state;
    return (
      <div className="card">
        <Card className="comparison-card" data-testid="city-cards">
          <div
            className="custom-image"
            style={{ backgroundImage: `url(${citiesData.image})` }}
          >
            <img
              alt={`Thumbnail for ${citiesData.name}, ${citiesData.state}`}
              src={citiesData.image}
            />
          </div>
          {!citiesData ? (
            <LoadingComponent message="Loading city data..." />
          ) : (
            <div className="custom-card">
              <h3>
                {citiesData.name}, {citiesData.state}
              </h3>
              <p>Population: {citiesData.population.data.total_pop}</p>
              <p>Rental Prices: ${citiesData.rent.studio}</p>
              <p>Weather: {citiesData.weather.summer_maxtempF_mean} degrees</p>
              <Button
                className="more-info-btn"
                data-testid="more-info-btn"
                type="primary"
                onClick={() => onSelectCity(citiesData)}
              >
                More Info
              </Button>
            </div>
          )}
        </Card>
        <ModalComponent
          visible={visible}
          setVisible={onToggleModal}
          city={city}
        />
      </div>
    );
  }
}

export default ComparisonCard;