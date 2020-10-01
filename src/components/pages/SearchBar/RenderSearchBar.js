import React, { useState } from "react";
import {
  AutoComplete,
  Input,
  InputNumber,
  Steps,
  Button,
  message,
  Switch,
  Slider
} from "antd";
import useLocalStorage from "../../../hooks/useLocalStorage";

const { Step } = Steps;

// The 'rooms' value for rental prices defaults to 1 bedroom
// All other values default to null/undefined, so they don't need to be manually set here
const initialSearchPrefs = {
  rooms: "1br",
  pop_min: 10000,
  pop_max: 2100000
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

  // Simultaneously update any number of search prefs
  // based on key-value pairs on the object passed in
  // This is used by sliders to set both ends at once
  const updateNamedSearchPrefs = changes =>
    setSearchPrefs({ ...searchPrefs, ...changes });
  let next = () => {
    const newNext = current + 1;
    setCurrent(newNext);
  };

  let prev = () => {
    const newPrev = current - 1;
    setCurrent(newPrev);
  };

  let formatPop = pop => {
    if (pop > 2000000) {
      return ">2 million";
    } else if (pop >= 1000000) {
      return `${(pop / 1000000).toFixed(1)} million`;
    } else {
      return pop.toLocaleString();
    }
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
            <option value="1br">1BR</option>
            <option value="2br">2BR</option>
            <option value="3br">3BR</option>
            <option value="4br">4BR</option>
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
              style={{ width: 85, textAlign: "center" }}
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
                width: 85,
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
            <label>
              Population:
              <Slider
                range
                min={10000}
                max={2100000}
                step={10000}
                value={[searchPrefs.pop_min, searchPrefs.pop_max]}
                tipFormatter={val => val.toLocaleString()}
                onChange={([pop_min, pop_max]) =>
                  updateNamedSearchPrefs({
                    pop_min,
                    pop_max
                  })
                }
              />
            </label>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
          <br />
          {/* Steps format for Bedroom and Rental price search */}
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          {/*console.log("TESTING", current)*/}
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
