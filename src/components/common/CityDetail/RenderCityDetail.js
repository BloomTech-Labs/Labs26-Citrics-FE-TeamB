import React from "react";
import { Skeleton } from "antd";
import { RentalPane, JobsPane, PopulationPane, WeatherPane } from "./panes";
export default function RenderCityDetail({ city, insideModal }) {
  return (
    <div className="city-detail-card" data-testid="city-detail-card">
      {city?.image ? (
        <div
          className="custom-image-details"
          style={{ backgroundImage: `url(${city.image})` }}
        >
          <img
            alt={`Thumbnail for ${city.name}, ${city.state}`}
            src={city.image}
          />
        </div>
      ) : (
        <Skeleton.Image active className="custom-image-details" />
      )}

      <h3 className="one-render-h3">
        {city?.name ? (
          `${city.name}, ${city.state}`
        ) : (
          <Skeleton active title={{ width: "30%" }} paragraph={false} />
        )}
      </h3>
      <div className="pane-container">
        <div>
          <WeatherPane
            weather={city.weather}
            currentWeather={city.currentWeather}
          />
        </div>
        <div className="rental-pane-container">
          <RentalPane rent={city.rent} predictions={city.rentalPrediction} />
        </div>
      </div>

      <JobsPane
        jobs={city.jobs}
        unemployment={city.unemployRate}
        // The JobsPane has a slightly different display
        // based on whether it's inside a modal or not
        insideModal={insideModal}
      />
      <PopulationPane
        population={city.population}
        prediction={city.popPrediction}
      />
    </div>
  );
}
