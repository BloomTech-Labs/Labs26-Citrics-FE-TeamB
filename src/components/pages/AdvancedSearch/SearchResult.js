import React from "react";
import { Button } from "antd";

import { connect } from "react-redux";
import { addCityNoDetails } from "../../../state/actions";

function SearchResult({ id, name, state, addCity }) {
  console.log(name, state);
  const addCityToComparison = () => addCity({ id, name, state });
  return (
    <div className="search-result">
      {`${name}, ${state}`}&nbsp;&nbsp;
      <Button onClick={addCityToComparison}>Add to Comparison</Button>
    </div>
  );
}
export default connect(null, { addCity: addCityNoDetails })(SearchResult);
