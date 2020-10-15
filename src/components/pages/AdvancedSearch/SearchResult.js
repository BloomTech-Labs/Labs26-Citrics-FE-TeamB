import React from "react";
import addIcon from "../../../styles/icons/add-48.png";
import addIconHover from "../../../styles/icons/add-hover-48.png";
import { connect } from "react-redux";
import { addCity } from "../../../state/actions";

function SearchResult({ id, name, state, addCity }) {
  const addCityToComparison = () => addCity({ id, name, state });

  return (
    <div className="search-result">
      {`${name}, ${state}`}&nbsp;&nbsp;
      <img
        src={addIcon}
        alt="circle with plus sign in middle icon"
        onClick={addCityToComparison}
        onMouseOver={e => (e.currentTarget.src = addIconHover)}
        onMouseOut={e => (e.currentTarget.src = addIcon)}
        className="add-to-compare-btn"
      />
    </div>
  );
}
export default connect(null, { addCity })(SearchResult);
