import React from "react";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";
import { CityDetailPage } from "../CityDetail";

class CityPage extends React.Component {
  render() {
    return (
      <CityDetailPage
        city={this.props.cityDetails[this.props.selectedCities[0].id]}
      />
    );
  }
}
const mapPropsToState = (
  { cities: { selectedCities, cityDetails } },
  props
) => ({ selectedCities, cityDetails, ...props });
export default connect(mapPropsToState, { getCityDetails })(CityPage);
