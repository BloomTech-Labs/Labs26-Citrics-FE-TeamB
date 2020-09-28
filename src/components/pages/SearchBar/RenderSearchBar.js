import React, { useState } from "react";
import { AutoComplete, Input, InputNumber, Steps, Button, message } from "antd";

const { Step } = Steps;

const steps = [
  {
    title: "Bedrooms",
    content: (
      <div>
        <label for="rooms">Select Bedrooms: </label>
        <select id="rooms" name="rooms">
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
          <label for="between">Population: </label>&nbsp;&nbsp;
          <InputNumber
            style={{ width: 100, textAlign: "center" }}
            placeholder="Minimum"
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

export default function RenderSearchBar({
  searchTerm,
  options,
  onChange,
  onSelect
}) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    const newCurrent = current + 1;
    setCurrent({ newCurrent });
  };

  const prev = () => {
    const newCurrent = current - 1;
    setCurrent({ newCurrent });
  };

  return (
    <div className="search-bar">
      <AutoComplete
        value={searchTerm}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onChange={onChange}
        placeholder="Enter City.."
      />
      <br />
      <br />

      <div className="site-input-group-wrapper">
        {/* For job industry--type and autocomplete */}
        <Input.Group compact>
          <label for="jobs">Job Industry:</label>
          <br />
          <Input style={{ width: "50%" }} placeholder="Ex: Tech" />
        </Input.Group>

        {/* For population and rent price */}
        <br />
        <Input.Group compact>
          <label for="between">Population: </label>
          <br />
          <Input
            style={{ width: 90, textAlign: "center" }}
            placeholder="Minimum"
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
          />
        </Input.Group>
      </div>

      {/* Steps format for Bedroom and Rental price search */}
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
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
    </div>
  );
}
