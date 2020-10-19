import React, { useState, useEffect } from "react";
import addIcon from "../../../styles/icons/add-48.png";
import addIconHover from "../../../styles/icons/add-hover-48.png";
import { connect } from "react-redux";
import { addCity, getCityDetails } from "../../../state/actions";
import CityDetail from "../../common/Modal";
import { Button } from "antd";

function SearchResult({ id, name, state, addCity, cityDetails }) {
  const addCityToComparison = () => addCity({ id, name, state });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (visible && !cityDetails[id]) {
      console.log("Retrieving data for city", id);
      getCityDetails(id);
    }
  }, [id, visible, cityDetails]);
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
      <Button onClick={() => setVisible(true)}>Details</Button>
      <CityDetail
        city={cityDetails[id]}
        visible={visible}
        toggleModal={() => setVisible(!visible)}
      />
    </div>
  );
}
const mapProps = ({ cities: { cityDetails } }, props) => ({
  ...props,
  cityDetails
});
export default connect(mapProps, { addCity, getCityDetails })(SearchResult);
