import React from "react";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";

import RenderCityPage from "./RenderCityPage";

class CityPage extends React.Component {
  state = { city: {} };

  fetchDataIfNeeded = async () => {
    const { id } = this.props.match.params;
    // If we don't have cached data on this city, retrieve it
    if (!this.props.cityDetails[id]) {
      // We need to wait for getCityDetails to finish before proceeding
      await this.props.getCityDetails({ id });
    }
    this.setState({ city: this.props.cityDetails[id] });
  };
  componentDidMount() {
    this.fetchDataIfNeeded();
  }
  componentDidUpdate(prevProps) {
    // If component remained mounted but user changed the cityId
    // Update the city info to match the new city
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchDataIfNeeded();
    }
  }
  render() {
    return (
      <RenderCityPage
        city={this.state.city}
        isLoading={!this.state.city?.name}
      />
    );
  }
}
const mapPropsToState = (
  { cities: { selectedCities, cityDetails } },
  props
) => ({ selectedCities, cityDetails, ...props });
export default connect(mapPropsToState, { getCityDetails })(CityPage);