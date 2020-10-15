import React from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import { addCity } from "../../../state/actions";

// function mouseEnter() {
//   document.text('Add to Comparison')
// }
// $(document).ready(function() {
//   $('visible-when-hovers').hover(mouseEnter)
// })

function SearchResult({ id, name, state, addCity }) {
  const addCityToComparison = () => addCity({ id, name, state });
  return (
    <div className="search-result">
      {`${name}, ${state}`}&nbsp;&nbsp;
      <div className="adding-container">
        <PlusCircleOutlined
          onClick={addCityToComparison}
          className="add-to-compare-btn"
        />
        <p className="visible-when-hovers">Add to Comparison</p>
      </div>
    </div>
  );
}
export default connect(null, { addCity })(SearchResult);
