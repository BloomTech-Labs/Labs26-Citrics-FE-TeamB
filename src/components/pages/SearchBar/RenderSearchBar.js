import React from "react";
import {
  AutoComplete,
  Input,
  Select,
  InputNumber,
  Steps,
  Button,
  message
} from "antd";

export default function RenderSearchBar({
  searchTerm,
  options,
  onChange,
  onSelect
}) {
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
    </div>
  );
}
