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
    // Retrieve the contents of the query string from values given by Router
    const queryParams = new URLSearchParams(props.location.search);
    // Must convert from iterator to array and convert id from string to number
    // This function assumes all query params are city names - hopefully they are
    const selectedCities = Array.from(queryParams.values()).map(id => ({
      id: Number(id)
    }));
    return selectedCities;
  };

  // Get the data for each city and set it individually
  retrieveDataForCity = async id => {
    // Fix a bug where some id's are undefined
    if (!id) return;
    await this.props.getCityDetails({ id });
  };

  // SelectedCities must be passed as an argument to this function
  // Retrieving it from this.state would result in outdated information being processed
  retrieveCityDataIfNeeded = async selectedCities => {
    // Retrieve all the city data
    // Each city is updated independently, but we need to wait for all to finish
    // before updating the title
    await Promise.all(
      selectedCities.map(({ id }) =>
        // If we don't have this city's data, retrieve it
        !this.props.cityDetails[id] ? this.retrieveDataForCity(id) : null
      )
    );
    // Once all data has been retrieved, update the title
    document.title = `Citrics | ${this.props.selectedCities.reduce(
      (ac, { name, state }) => `${ac} ${name}, ${state}`,
      ""
    )}`;
  };

  render() {
    return this.state.selectedCities.length < 2 ? (
      <Redirect to="/" />
    ) : (
      <div className="comparison-container">
        <RenderComparison
          // Data is pulled directly from Redux
          // with {} as a fallback to avoid errors
          citiesData={this.state.selectedCities.map(
            ({ id }) => this.props.cityDetails[id] ?? {}
          )}
        />
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
