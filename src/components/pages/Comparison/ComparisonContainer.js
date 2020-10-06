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

  // Get the data for each city and set it individually
  retrieveDataForCity = async id => {
    if (!id) return;
    console.log("Getting data for city number", id);
    // Retrieve the location of this city's data in the array
    const cityEntryLocation = this.state.citiesData.findIndex(
      ({ id: cityId }) => Number(id) === Number(cityId)
    );
    // Ask Redux to get city details and wait for it to finish
    await this.props.getCityDetails({ id });
    const newlyRetrievedDetails = this.props.cityDetails[id];
    // Create a new copy of citiesData
    let citiesData = [...this.state.citiesData];
    // Replace the dummy entry for this city with the correct data
    citiesData[cityEntryLocation] = newlyRetrievedDetails;
    // Update the state store for citiesData, and wait before continuing
    await this.setState({ citiesData });
    // console.log("Loaded data for", newlyRetrievedDetails.name);
  };
  // Retrieving selectedCities from this.state instead of as a function argument
  // would result in cityDetails using out-of-date information
  retrieveCityDataIfNeeded = async selectedCities => {
    // Generate temporary citiesData while loading
    let citiesData = selectedCities.map(({ id }) => {
      const { cityDetails, selectedCities } = this.props;
      return (
        // If we already have all data return it
        cityDetails[id] ??
        // If we have name and state data from selectedCities, return it
        selectedCities.find(
          ({ id: cityId }) => Number(cityId) === Number(id)
        ) ?? {
          // If we have no info, just return id
          id
        }
      );
    });
    // Apply that temporary city data
    await this.setState({ citiesData });
    // Retrieve all the city data
    // Each city is updated independently, but we need to wait for all to finish
    // before proceeding
    await Promise.all(
      citiesData.map(({ id }) =>
        // If we don't have this city's data, retrieve it
        !this.props.cityDetails[id] ? this.retrieveDataForCity(id) : null
      )
    );
    // Once all data has been retrieved, update the title
    document.title = `Citrics | ${this.state.citiesData.reduce(
      (ac, { name, state }) => `${ac} ${name}, ${state}`,
      ""
    )}`;
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
