import React from "react";
import { Button } from "antd";

import { connect } from "react-redux";
import { addCity } from "../../../state/actions";

function SearchResult({ id, name, state, addCity }) {
  const addCityToComparison = () => addCity({ id, name, state });
  return (
    <div className="search-result">
      {`${name}, ${state}`}
      <Button onClick={addCityToComparison}>Add to Comparison</Button>
    </div>
  );
}
export default connect(null, { addCity })(SearchResult);
