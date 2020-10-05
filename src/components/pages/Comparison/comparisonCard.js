import React, { Component } from "react";
import ModalComponent from "./Modal";
import { Divider, Skeleton } from "antd";
//icons
import weather from "../../../styles/icons/weather-48.png";
import population from "../../../styles/icons/pop-48.png";
import pricing from "../../../styles/icons/pricing-48.png";

function LoadingSkeleton() {
  return (
    <div style={{ minWidth: "200px" }}>
      <Skeleton active title={false} paragraph={{ rows: 1 }} />
    </div>
  );
}

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
          <div className="basic-card-info">
            <div className="card-metrics">
              {citiesData.name ? (
                <h3>
                  {citiesData.name}, {citiesData.state}
                </h3>
              ) : (
                <Skeleton.Input size={"large"} style={{ width: "200px" }} />
              )}
              {/* <Divider className='divider' />
              <div className='metrics-parent'>
                <img
                  className='metrics-icon'
                  src={population}
                  alt='Population icon'
                />
                <div className='metrics-child'>
                  <p>
                    <b>Population:</b>
                  </p>
                  <p>{citiesData.population.data.total_pop.toLocaleString()}</p>
                </div>
              </div>
              <div className='metrics-parent'>
                <img
                  className='metrics-icon'
                  src={pricing}
                  alt='Rental pricing icon'
                />
                <div className='metrics-child'>
                  <p>
                    <b>Rental Prices:</b>
                  </p>
                  <p>{`${"$" + citiesData.rent["1br"]}/month (1BR)`}</p>
                </div>
              </div>
              <div className='metrics-parent'>
                <img
                  className='metrics-icon'
                  src={weather}
                  alt='Weather icon'
                />
                <div className='metrics-child'>
                  <p>
                    <b>Weather:</b>
                  </p>
                  <p>{`${citiesData.weather.winter_mintempF_mean}°F - ${citiesData.weather.summer_maxtempF_mean}°F`}</p>
                </div>
              </div> */}
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
