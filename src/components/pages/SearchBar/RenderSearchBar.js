import React from "react";
import { AutoComplete } from "antd";
import { Link } from "react-router-dom";

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
        placeholder="Add a city by name..."
      />
      <br />
      <Link to="/advanced-search">Advanced search</Link>
    </div>
  );
}
