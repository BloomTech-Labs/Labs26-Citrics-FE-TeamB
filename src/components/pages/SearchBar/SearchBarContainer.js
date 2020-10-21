// Library imports
import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addCity } from "../../../state/actions";
import axios from "axios";
import RenderSearchBar from "./RenderSearchBar";

class SearchBar extends React.Component {
  state = { cityList: [], searchTerm: "", options: [] };
  componentDidMount() {
    // Retrieve user's currently selected cities
    // using either the query string on comparison page or id on city detail page
    let selectedCities = [];
    const { pathname, search } = this.props.location;
    if (pathname.includes("comparison-page")) {
      const queryParams = new URLSearchParams(search);
      // IDs are stored in query string
      selectedCities = Array.from(queryParams.values()).map(id => Number(id));
    } else if (pathname.includes("city-detail-page")) {
      // ID is stored as the last part of url path
      selectedCities = [Number(pathname.split("/").pop())];
    }
    // Retrieve city list from the backend
    axios
      .get("https://b-ds.citrics.dev/cities")
      .then(r => r.data.cities)
      .then(queryResult =>
        queryResult.map(item => ({
          // need to add value to display in the Autocomplete
          value: `${item.name}, ${item.state}`,
          ...item
        }))
      )
      .then(cityList => {
        // store city list
        this.setState({ cityList });
        // add any already selected cities to the Redux store
        selectedCities.forEach(cityId => {
          const city = cityList.find(({ id }) => Number(id) === cityId);
          city && this.props.addCity(city);
        });
      });
  }

  // Every keystroke, update what's shown in the box
  // and generate an autocomplete
  onChange = searchTerm => {
    this.setState({ searchTerm });
    const searchResults = this.state.cityList.filter(item =>
      item.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({
      // If something is entered, show the top 5 results in the AutoComplete
      options: !searchTerm ? [] : searchResults.slice(0, 5)
    });
  };

  // When clicking on a city, add it to the selected cities
  // and empty the search term
  // Limited to 3 cities
  onSelect = data => {
    if (this.props.selectedCities.length < 3) {
      const entry = this.state.cityList.find(({ value }) => value === data);
      this.props.addCity(entry);
      this.setState({ searchTerm: "" });
    } else {
      alert("You can only add 3 cities");
      this.setState({ searchTerm: "" });
    }
  };
  render() {
    return (
      <>
        <RenderSearchBar
          searchTerm={this.state.searchTerm}
          options={this.state.options}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />
        <br />
        {this.props.selectedCities.length < 3
          ? ""
          : "Only 3 cities may be selected."}
      </>
    );
  }
}
const mapPropsToState = ({ cities: { selectedCities } }, props) => ({
  ...props,
  selectedCities
});
export default connect(mapPropsToState, { addCity })(withRouter(SearchBar));
