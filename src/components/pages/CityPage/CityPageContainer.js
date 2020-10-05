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
    document.title = `Citrics | ${this.props.cityDetails[id].name}, ${this.props.cityDetails[id].state}`;
  };

  // Get name/state info from selectedCites, if applicable
  retrieveFromSelectedCities = () => {
    const { id } = this.props.match.params;
    // If we have data on this city stored in selectedCities, use it
    const tempCity = this.props.selectedCities.find(
      ({ id: cityId }) => Number(id) === Number(cityId)
    ) ?? { id }; // If not, city object should just contain an "id" while we load
    // Clear out old city data while we load new data
    this.setState({ city: { ...tempCity, ...this.state.city } });
  };
  componentDidMount() {
    // Get name/state from selectedCities
    this.retrieveFromSelectedCities();
    // Retrieve other data if needed
    this.fetchDataIfNeeded();
  }
  componentDidUpdate(prevProps) {
    // Update name/state info if selectedCities is updated
    if (prevProps.selectedCities !== this.props.selectedCities) {
      this.retrieveFromSelectedCities();
    }
    const { id } = this.props.match.params;
    // If component remained mounted but user changed the cityId
    // Update the city info to match the new city
    if (prevProps.match.params.id !== id) {
      this.retrieveFromSelectedCities();
      this.fetchDataIfNeeded();
    }
  }
  render() {
    return <RenderCityPage city={this.state.city} />;
  }
}
const mapPropsToState = (
  { cities: { selectedCities, cityDetails } },
  props
) => ({ selectedCities, cityDetails, ...props });
export default connect(mapPropsToState, { getCityDetails })(CityPage);
