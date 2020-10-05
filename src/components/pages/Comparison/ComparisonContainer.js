//Library imports
import React from "react";
import RenderComparison from "./RenderComparison";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getCityDetails } from "../../../state/actions";

class ComparisonContainer extends React.Component {
  constructor(props) {
    super(props);
    // Initialize with selectedCities parsed from the query string
    // and empty citiesData
    this.state = {
      selectedCities: this.parseSelectedCities(props),
      citiesData: []
    };
  }
  componentDidMount() {
    document.title = "Citrics | Comparison Page";
    // Upon mounting, get cityDetails from Redux
    // and also request new data from the server if needed
    this.retrieveCityDataIfNeeded(this.state.selectedCities);
  }
  componentDidUpdate(prevProps) {
    // If we're viewing a new comparison
    if (prevProps.location.search !== this.props.location.search) {
      // Get the cities from the query string
      const selectedCities = this.parseSelectedCities(this.props);
      this.setState({ selectedCities });
      // Also request city details from the server if needed
      this.retrieveCityDataIfNeeded(selectedCities);
    }
  }
  parseSelectedCities = props => {
    // Using the new URLSearchParams class to extract values from the query
    const queryParams = new URLSearchParams(props.location.search);
    // Must convert from iterator to array, and convert id from string to number
    const selectedCities = Array.from(queryParams.values()).map(id => ({
      id: Number(id)
    }));

    return selectedCities;
  };
  // Retrieving selectedCities from this.state instead of as a function argument
  // would result in cityDetails using out-of-date information
  retrieveCityDataIfNeeded = async selectedCities => {
    // Generate temporary citiesData while loading
    const tempCitiesData = selectedCities.map(({ id }) => ({
      id,
      name: this.props.cityDetails?.[id]?.name,
      state: this.props.cityDetails?.[id]?.state
    }));
    this.setState({ citiesData: tempCitiesData });
    for (const { id } of selectedCities) {
      if (!this.props.cityDetails[id]) {
        // Make sure each server request finished before proceeding
        await this.props.getCityDetails({ id });
      }
    }
    // Get citiesData using the latest information from Redux passed thru props
    let citiesData = selectedCities.map(({ id }) => this.props.cityDetails[id]);
    // Update page title to match city data
    document.title = `Citrics | ${citiesData.reduce(
      (ac, { name, state }) => `${ac} ${name}, ${state}`,
      ""
    )}`;
    this.setState({ citiesData });
  };
  render() {
    return this.state.selectedCities.length < 2 ? (
      <Redirect to="/" />
    ) : (
      <div className="comparison-container">
        <RenderComparison citiesData={this.state.citiesData} />
      </div>
    );
  }
}
const mapState = ({ cities: { cityDetails, selectedCities } }, props) => ({
  ...props,
  cityDetails,
  selectedCities
});
export default connect(mapState, { getCityDetails })(ComparisonContainer);
