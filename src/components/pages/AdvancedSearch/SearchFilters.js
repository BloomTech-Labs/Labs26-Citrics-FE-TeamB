import React from "react";
// import { Input } from "antd"; --commented out because not in use while Jobs isn't implemented (see below)
import {
  POP_MIN,
  POP_MAX,
  RENT_MIN,
  RENT_MAX,
  WEATHER_MIN,
  WEATHER_MAX
} from "./constants";
import RenderSearchFilter from "./RenderSearchFilter";
export default function SearchFilters({
  searchPrefs,
  updateSearchPrefs,
  getSearchResults
}) {
  // This function expects an event triggered by an element with 'name' and 'value' attributes
  // that match a key-value pair in the searchPrefs object
  const processSearchPrefsEvent = ({ target: { name, value } }) =>
    updateSearchPrefs({ [name]: value });
  const formatPop = pop => {
    if (pop >= POP_MAX) {
      return ">2 million";
    } else if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(1)} million`;
    } else {
      return pop.toLocaleString();
    }
  };
  const formatMoney = price =>
    price >= RENT_MAX ? ">$4,500" : `$ ${price.toLocaleString()}`;
  const formatWeather = temp => {
    if (temp >= WEATHER_MAX) {
      return ">95°F";
    } else if (temp <= WEATHER_MIN) {
      return "<20°F";
    } else {
      return `${temp}°F`;
    }
  };
  return (
    <div className="search-bar">
      <div className="filter-container">
        {/* RenderSearchFilter will render a popover with a Slider and range display inside it for each type of filter. */}
        {/* Population */}
        <RenderSearchFilter
          range
          title="Population"
          min={POP_MIN}
          max={POP_MAX}
          step={10000}
          value={[searchPrefs.pop_min, searchPrefs.pop_max]}
          tipFormatter={formatPop}
          onChange={([pop_min, pop_max]) =>
            updateSearchPrefs({
              pop_min,
              pop_max
            })
          }
          onAfterChange={getSearchResults}
        />
        {/* Weather */}
        <RenderSearchFilter
          range
          title="Weather"
          popoverTitle="Seasonal Temp Range"
          min={WEATHER_MIN}
          max={WEATHER_MAX}
          step={5}
          value={[searchPrefs.weather_min, searchPrefs.weather_max]}
          tipFormatter={formatWeather}
          onChange={([weather_min, weather_max]) =>
            updateSearchPrefs({
              weather_min,
              weather_max
            })
          }
          onAfterChange={getSearchResults}
        />
        {/* Rent: this filter passes an additional input to render as a child of RenderSearchFilter */}
        <RenderSearchFilter
          title={`Rent (${searchPrefs.rooms})`}
          popoverTitle="Rent"
          min={RENT_MIN}
          max={RENT_MAX}
          step={100}
          value={searchPrefs.rent_max}
          tipFormatter={formatMoney}
          onChange={rent_max =>
            updateSearchPrefs({
              rent_max
            })
          }
          onAfterChange={getSearchResults}
        >
          <label>
            {"Rooms: "}
            <select
              id="rooms"
              name="rooms"
              onChange={e => {
                processSearchPrefsEvent(e);
                getSearchResults();
              }}
              value={searchPrefs.rooms}
            >
              <option value="studio">Studio</option>
              <option value="1br">1BR</option>
              <option value="2br">2BR</option>
              <option value="3br">3BR</option>
              <option value="4br">4BR</option>
            </select>
          </label>
        </RenderSearchFilter>

        {/* Jobs: currently unimplemented
      // uncomment the import of Input from antd to use
      <RenderSearchFilter
        title="Jobs"
        popoverTitle={"Major Job Industries"}
        value={searchPrefs.jobs}
        input={
          <Input
            placeholder="Ex: Tech"
            name="jobs"
            onChange={processSearchPrefsEvent}
            value={searchPrefs.jobs}
          />
        }
      />
       */}
      </div>
    </div>
  );
}
