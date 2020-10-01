import React, { Component } from "react";
import ModalComponent from "../../common/Modal.js";
import LoadingComponent from "../../common/LoadingComponent";
//icons
import weather from "../../../styles/icons/weather-48.png";
import population from "../../../styles/icons/pop-48.png";
import pricing from "../../../styles/icons/pricing-48.png";

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
        <div className="comparison-card" data-testid="city-cards">
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
            <div className="basic-card-info">
              <div className="card-metrics">
                <h3>
                  {citiesData.name}, {citiesData.state}
                </h3>
                <p>
                  <img src={population} alt="Population icon" />
                  {citiesData.population.data.total_pop.toLocaleString()}
                </p>
                <p>
                  <img src={pricing} alt="Rental pricing icon" />
                  {`${"$" + citiesData.rent["1br"]}/month (1BR)`}
                </p>
                <p>
                  <img src={weather} alt="Weather icon" />
                  {`${citiesData.weather.winter_mintempF_mean}°F - ${citiesData.weather.summer_maxtempF_mean}°F`}
                </p>
              </div>
              <div className="btn-container">
                <button
                  className="more-info-btn"
                  data-testid="more-info-btn"
                  type="primary"
                  onClick={() => onSelectCity(citiesData)}
                >
                  More Info
                </button>
              </div>
            </div>
          )}
        </div>
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
