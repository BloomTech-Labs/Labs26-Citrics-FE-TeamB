import React, { useState, useEffect } from "react";
import addIcon from "../../../styles/icons/add-48.png";
import addIconHover from "../../../styles/icons/add-hover-48.png";
import { connect } from "react-redux";
import { addCity, getCityDetails } from "../../../state/actions";
import CityDetail from "../../common/Modal";
import { Button } from "antd";

function SearchResult(props) {
  const { id, name, state, addCity, cityDetails, getCityDetails } = props;
  const addCityToComparison = () => addCity({ id, name, state });
  // Modal visibility
  const [visible, setVisible] = useState(false);

  // Retrieve details if we open a modal and don't have those details
  useEffect(() => {
    if (visible && !cityDetails[id]) {
      getCityDetails({ id, name, state });
    }
  }, [id, name, state, visible, cityDetails, getCityDetails]);
  return (
    <>
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
      </div>
      {/* Modal to show city details */}
      <CityDetail
        city={cityDetails[id] ?? { id, name, state }}
        visible={visible}
        toggleModal={() => setVisible(!visible)}
      />
    </>
  );
}
const mapProps = ({ cities: { cityDetails } }, props) => ({
  ...props,
  cityDetails
});
export default connect(mapProps, { addCity, getCityDetails })(SearchResult);
