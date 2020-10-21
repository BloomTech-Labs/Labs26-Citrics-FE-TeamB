import React, { Component } from "react";
import { CityDetailModal } from "../../common/CityDetail/";
import { Divider, Skeleton } from "antd";
//icons
import weather from "../../../styles/icons/weather-48.png";
import population from "../../../styles/icons/pop-48.png";
import pricing from "../../../styles/icons/pricing-48.png";
import { LoadingSkeleton } from "../../common";

export default class ComparisonCard extends Component {
  state = {
    visible: false
  };
  toggleModal = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    const { city } = this.props;
    const { visible } = this.state;
    const { toggleModal } = this;
    return (
      <div className="card">
        <div className="comparison-card" data-testid="city-cards">
          {/* Header Image */}
          {city.image ? (
            <div
              className="custom-image"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <img
                alt={`Thumbnail for ${city.name}, ${city.state}`}
                src={city.image}
              />
            </div>
          ) : (
            <Skeleton.Image active className="custom-image" />
          )}
          <div className="basic-card-info">
            <div className="card-metrics">
              {/* Name and State */}
              {city.name ? (
                <h3 className="city-name">
                  {city.name}, {city.state}
                </h3>
              ) : (
                <Skeleton.Input
                  active
                  size={"large"}
                  style={{ width: "200px" }}
                />
              )}
              <Divider className="divider" />
              {/* Population info */}
              <div className="metrics-parent">
                <img
                  className="metrics-icon"
                  src={population}
                  alt="Population icon"
                />
                <div className="metrics-child">
                  <p>
                    <b>Population:</b>
                  </p>
                  {city.population ? (
                    <p>{city.population.data.total_pop.toLocaleString()}</p>
                  ) : (
                    <LoadingSkeleton minWidth="150px" rows={1} />
                  )}
                </div>
              </div>
              {/* Rent info */}
              <div className="metrics-parent">
                <img
                  className="metrics-icon"
                  src={pricing}
                  alt="Rental pricing icon"
                />
                <div className="metrics-child">
                  <p>
                    <b>Rental Prices:</b>
                  </p>
                  {city.rent ? (
                    <p>{`${"$" + city.rent["1br"]}/month (1BR)`}</p>
                  ) : (
                    <LoadingSkeleton minWidth="150px" rows={1} />
                  )}
                </div>
              </div>
              {/* Current weather */}
              <div className="metrics-parent">
                <img
                  className="metrics-icon"
                  src={weather}
                  alt="Weather icon"
                />
                <div className="metrics-child">
                  <p>
                    <b>Current Weather:</b>
                  </p>
                  {city.currentWeather ? (
                    <p>{`${Math.round(city.currentWeather.current.temp)}°F`}</p>
                  ) : (
                    <LoadingSkeleton minWidth="150px" rows={1} />
                  )}
                </div>
              </div>
            </div>
            {/* Modal and toggle button */}
            <div className="btn-container">
              <button
                className="more-info-btn"
                data-testid="more-info-btn"
                type="primary"
                onClick={toggleModal}
              >
                More Info
              </button>
            </div>
          </div>
        </div>
        <CityDetailModal
          visible={visible}
          toggleModal={toggleModal}
          city={this.props.city}
        />
      </div>
    );
  }
}
