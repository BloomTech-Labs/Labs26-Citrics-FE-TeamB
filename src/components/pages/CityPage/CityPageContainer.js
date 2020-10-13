import React from "react";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";

import RenderCityPage from "./RenderCityPage";

class CityPage extends React.Component {
  state = { city: {} };

  fetchDataIfNeeded = async () => {
    const { id } = this.props.match.params;
    this.setState({ city: { id } });
    // If we don't have cached data on this city, retrieve it
    if (!this.props.cityDetails[id]) {
      // We need to wait for getCityDetails to finish before proceeding
      await this.props.getCityDetails({ id });
    }
    // Update title once data has been loaded
    document.title = `Citrics | ${this.props.cityDetails[id].name}, ${this.props.cityDetails[id].state}`;
  };

  componentDidMount() {
    // Retrieve data if needed
    this.fetchDataIfNeeded();
  }
  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    // If component remained mounted but user changed the cityId
    // Update the city info to match the new city
    if (prevProps.match.params.id !== id) {
      this.fetchDataIfNeeded();
    }
  }
  render() {
    return (
      <RenderCityPage city={this.props.cityDetails[this.state.city.id] ?? {}} />
    );
  }
}
const mapPropsToState = ({ cities: { cityDetails } }, props) => ({
  cityDetails,
  ...props
});
export default connect(mapPropsToState, { getCityDetails })(CityPage);
