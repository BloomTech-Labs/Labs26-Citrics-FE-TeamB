import React, { useState } from "react";
import {
  AutoComplete,
  Input,
  InputNumber,
  Steps,
  Button,
  message,
  Switch
} from "antd";
import useLocalStorage from "../../../hooks/useLocalStorage";

const { Step } = Steps;

// The 'rooms' value for rental prices defaults to 1 bedroom
// All other values default to null/undefined, so they don't need to be manually set here
const initialSearchPrefs = {
  rooms: "1bd"
};
export default function RenderSearchBar({
  searchTerm,
  options,
  onChange,
  onSelect
}) {
  const [current, setCurrent] = useState(0);
  const [showAdvancedView, setShowAdvancedView] = useState(false);
  const toggleAdvancedView = () => setShowAdvancedView(!showAdvancedView);

  // useLocalStorage is a custom hook made by David Horstman
  // For more info hover over it or see the docs in /hooks/useLocalStorage.js
  const [searchPrefs, setSearchPrefs] = useLocalStorage(
    "searchPrefs",
    initialSearchPrefs
  );
  // I opted to store searchPrefs in an object to simplify getting/setting values
  // Otherwise we'd need many different useLocalStorage calls
  // It can potentially impact performance, but in my testing everything was plenty fast
  const updateSearchPrefs = ({ target: { name, value } }) =>
    // This function expects an event triggered by an element with 'name' and 'value' attributes
    // that match a key-value pair in the searchPrefs object
    setSearchPrefs({ ...searchPrefs, [name]: value });

  let next = () => {
    const newNext = current + 1;
    setCurrent(newNext);
  };

  let prev = () => {
    const newPrev = current - 1;
    setCurrent(newPrev);
  };

  // Need this inside the component closure to give it access to the values and setter function
  const steps = [
    {
      title: "Bedrooms",
      content: (
        <div>
          <label htmlFor="rooms">Select Bedrooms: </label>
          <select
            id="rooms"
            name="rooms"
            onChange={updateSearchPrefs}
            value={searchPrefs.rooms}
          >
            <option value="studio">Studio</option>
            <option value="1bd">1BR</option>
            <option value="2bd">2BR</option>
            <option value="3bd">3BR</option>
            <option value="4bd">4BR</option>
          </select>
        </div>
      )
    },
    {
      title: "Rental Prices",
      content: (
        <div>
          <Input.Group compact>
            <label htmlFor="between">Prices: </label>&nbsp;&nbsp;
            <InputNumber
              style={{ width: 100, textAlign: "center" }}
              placeholder="Minimum"
              name="rent_min"
              // This input invokes the event handler with just a value
              // instead of an event object
              // The onChange function here essentially wraps that value into
              // a "synthetic" event object
              onChange={value =>
                updateSearchPrefs({ target: { value, name: "rent_min" } })
              }
              value={searchPrefs.rent_min}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
                width: 100,
                textAlign: "center"
              }}
              placeholder="Maximum"
              name="rent_max"
              // onChange here wraps the value in a synthetic event as described above
              onChange={value =>
                updateSearchPrefs({ target: { value, name: "rent_max" } })
              }
              value={searchPrefs.rent_max}
              formatter={value =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={value => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Input.Group>
        </div>
      )
    }
  ];

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
            {/* For job industry--type and autocomplete */}
            <Input.Group compact>
              <label htmlFor="jobs">Job Industry:</label>
              <br />
              <Input
                style={{ width: "50%" }}
                placeholder="Ex: Tech"
                name="jobs"
                onChange={updateSearchPrefs}
                value={searchPrefs.jobs}
              />
            </Input.Group>

            {/* For population and rent price */}
            <br />
            <Input.Group compact>
              <label htmlFor="between">Population: </label>
              <br />
              <Input
                style={{ width: 90, textAlign: "center" }}
                placeholder="Minimum"
                name="pop_min"
                onChange={updateSearchPrefs}
                value={searchPrefs.pop_min}
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
              <Input
                className="site-input-right"
                style={{
                  width: 90,
                  textAlign: "center"
                }}
                placeholder="Maximum"
                name="pop_max"
                onChange={updateSearchPrefs}
                value={searchPrefs.pop_max}
              />
            </Input.Group>
          </div>

          {/* Steps format for Bedroom and Rental price search */}
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          {console.log("TESTING", current)}
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
