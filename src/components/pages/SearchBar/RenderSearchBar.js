import React, { useState } from "react";
import { AutoComplete, Input, Switch, Slider } from "antd";
import useLocalStorage from "../../../hooks/useLocalStorage";

const initialSearchPrefs = {
  rooms: "1br",
  pop_min: 10000,
  pop_max: 2100000,
  rent_min: 100,
  rent_max: 5100,
  weather_min: 15,
  weather_max: 105
};

export default function RenderSearchBar({
  searchTerm,
  options,
  onChange,
  onSelect
}) {
  const [showAdvancedView, setShowAdvancedView] = useState(false);
  const toggleAdvancedView = () => setShowAdvancedView(!showAdvancedView);

  // I opted to store searchPrefs in an object to simplify getting/setting values
  // Otherwise we'd need many different useLocalStorage calls
  // It can potentially impact performance, but in my testing everything was plenty fast
  const [searchPrefs, setSearchPrefs] = useLocalStorage(
    "searchPrefs",
    initialSearchPrefs
  );
  // useLocalStorage is a custom hook made by David Horstman
  // For more info hover over it or see the docs in /hooks/useLocalStorage.js

  // This function expects an event triggered by an element with 'name' and 'value' attributes
  // that match a key-value pair in the searchPrefs object
  const processSearchPrefsEvent = ({ target: { name, value } }) =>
    updateNamedSearchPrefs({ [name]: value });

  // Simultaneously update any number of search prefs
  // based on key-value pairs on the object passed in
  // This is used by sliders to set both ends at once
  const updateNamedSearchPrefs = changes =>
    setSearchPrefs({ ...searchPrefs, ...changes });

  const formatPop = pop => {
    if (pop > 2000000) {
      return ">2 million";
    } else if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(1)} million`;
    } else {
      return pop.toLocaleString();
    }
  };
  const formatMoney = price =>
    price > 5000 ? ">$5,000" : `$ ${price.toLocaleString()}`;
  const formatWeather = temp => {
    if (temp > 100) {
      return ">100°F";
    } else if (temp < 20) {
      return "<20°F";
    } else {
      return `${temp}°F`;
    }
  };

  return (
    <div className="search-bar">
      <label>
        <Switch onChange={toggleAdvancedView} checked={showAdvancedView} />
        {showAdvancedView ? "Advanced Search" : "Basic Search"}
      </label>
      {/* If we're not in advanced view, show the city autocomplete */}
      {!showAdvancedView ? (
        <AutoComplete
          value={searchTerm}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onChange={onChange}
          placeholder="Enter City.."
        />
      ) : (
        <>
          {/* If we are in advanced view, show the preferences pane */}
          <div className="site-input-group-wrapper">
            {/* Population*/}
            <br />
            <label>
              Population:
              <Slider
                range
                min={10000}
                max={2100000}
                step={10000}
                value={[searchPrefs.pop_min, searchPrefs.pop_max]}
                tipFormatter={formatPop}
                onChange={([pop_min, pop_max]) =>
                  updateNamedSearchPrefs({
                    pop_min,
                    pop_max
                  })
                }
              />
            </label>
            <div className="advanced-search-range-display">
              <span>{formatPop(searchPrefs.pop_min)}</span>
              <span> to </span>
              <span>{formatPop(searchPrefs.pop_max)}</span>
            </div>
            {/* <Input.Group compact>
              <InputNumber
                style={{ width: 90, textAlign: "center" }}
                placeholder="Minimum"
                name="pop_min"
                // This input invokes the event handler with just a value
                // instead of an event object
                // The onChange function here essentially wraps that value into
                // a "synthetic" event object
                onChange={value =>
                  updateSearchPrefs({ target: { value, name: "pop_min" } })
                }
                value={searchPrefs.pop_min}
                formatter={val =>
                  `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
              />
              <Input
                className="site-input-split"
                style={{
                  width: 30,
                  borderLeft: 0,
                  borderRight: 0,
                  pointerEvents: "none"
                }}
                placeholder="-"
                disabled
              />
              <InputNumber
                className="site-input-right"
                style={{
                  width: 90,
                  textAlign: "center"
                }}
                placeholder="Maximum"
                name="pop_max"
                // This input invokes the event handler with just a value
                // instead of an event object
                // The onChange function here essentially wraps that value into
                // a "synthetic" event object
                onChange={value =>
                  updateSearchPrefs({ target: { value, name: "pop_max" } })
                }
                value={searchPrefs.pop_max}
                formatter={val =>
                  `${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={value => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Input.Group> */}
          </div>

          {/* Weather */}
          <br />
          <label htmlFor="weather">Weather:</label>
          <Slider
            id="weather"
            range
            min={15}
            max={105}
            step={5}
            value={[searchPrefs.weather_min, searchPrefs.weather_max]}
            tipFormatter={formatWeather}
            onChange={([weather_min, weather_max]) =>
              updateNamedSearchPrefs({
                weather_min,
                weather_max
              })
            }
          />
          <div className="advanced-search-range-display">
            <span>{formatWeather(searchPrefs.weather_min)}</span>
            <span> to </span>
            <span>{formatWeather(searchPrefs.weather_max)}</span>
          </div>

          {/* Rent */}
          <br />
          <label htmlFor="rent">
            {"Rent for "}
            <select
              id="rooms"
              name="rooms"
              onChange={processSearchPrefsEvent}
              value={searchPrefs.rooms}
            >
              <option value="studio">Studio</option>
              <option value="1br">1BR</option>
              <option value="2br">2BR</option>
              <option value="3br">3BR</option>
              <option value="4br">4BR</option>
            </select>
            {" apt:"}
          </label>
          <Slider
            id="rent"
            range
            min={100}
            max={5100}
            step={100}
            value={[searchPrefs.rent_min, searchPrefs.rent_max]}
            tipFormatter={formatMoney}
            onChange={([rent_min, rent_max]) =>
              updateNamedSearchPrefs({
                rent_min,
                rent_max
              })
            }
          />
          <div className="advanced-search-range-display">
            <span>{formatMoney(searchPrefs.rent_min)}</span>
            <span> to </span>
            <span>{formatMoney(searchPrefs.rent_max)}</span>
          </div>

          {/* Job industries */}
          <br />
          <Input.Group compact>
            <label htmlFor="jobs">Job Industries:</label>
            <br />
            <Input
              style={{ width: "50%" }}
              placeholder="Ex: Tech"
              name="jobs"
              onChange={processSearchPrefsEvent}
              value={searchPrefs.jobs}
            />
          </Input.Group>
        </>
      )}
    </div>
  );
}
