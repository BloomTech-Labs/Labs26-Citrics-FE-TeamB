import React, { Component } from "react";
import ModalComponent from "./Modal";
import { Divider, Skeleton } from "antd";
//icons
import weather from "../../../styles/icons/weather-48.png";
import population from "../../../styles/icons/pop-48.png";
import pricing from "../../../styles/icons/pricing-48.png";

function LoadingSkeleton() {
  return (
    <div style={{ minWidth: "150px" }}>
      <Skeleton active title={false} paragraph={{ rows: 1 }} />
    </div>
  );
}

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
                    <LoadingSkeleton />
                  )}
                </div>
              </div>
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
                    <LoadingSkeleton />
                  )}
                </div>
              </div>
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
                    <LoadingSkeleton />
                  )}
                </div>
              </div>
            </div>
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
        <ModalComponent
          visible={visible}
          setVisible={toggleModal}
          city={this.props.city}
        />
      </div>
    );
  }
}
