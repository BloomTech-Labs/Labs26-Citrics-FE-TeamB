// Library imports
import React from "react";
import { AutoComplete } from "antd";
import { connect } from "react-redux";
import { addCity } from "../../../state/actions";
import axios from "axios";

class SearchBar extends React.Component {
  state = { cityList: [], searchTerm: "", options: [] };
  componentDidMount() {
    axios
      .get("https://b-ds.citrics.dev/cities")
      .then(r => r.data.cities)
      // .then(r => {console.log(r); return r;})
      .then(queryResult =>
        this.setState({
          cityList: queryResult.map(item => ({
            value: `${item.name} ${item.state}`,
            ...item
          }))
        })
      );
  }

  // Sets user input to searchTerm
  onChange = searchTerm => {
    this.setState({ searchTerm });
    const searchResults = this.state.cityList.filter(item =>
      item.value.toLowerCase().includes(searchTerm)
    );
    // this.setState({ searchResults });
    this.setState({
      options: !this.state.searchTerm ? [] : searchResults.slice(0, 5)
    });
  };

  // // On each keystroke, update the list shown in Autocomplete
  // onSearch = searchText => {

  // };

  // When clicking on a city, add it to the selected cities
  onSelect = data => {
    const entry = this.state.cityList.find(({ value }) => value === data);
    this.props.addCity(entry);
    this.setState({ searchTerm: "" });
  };
  render() {
    return (
      <AutoComplete
        value={this.state.searchTerm}
        options={this.state.options}
        style={{ width: 200 }}
        onSelect={this.onSelect}
        // onSearch={this.onSearch}
        onChange={this.onChange}
        placeholder="Enter City.."
      />
    );
  }
}
const mapPropsToState = (reduxProps, props) => props;
export default connect(mapPropsToState, { addCity })(SearchBar);
