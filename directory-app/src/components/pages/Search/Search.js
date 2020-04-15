import API from "../../../utils/API";
import React, { Component } from "react";
import SearchForm from "../../SearchForm";
import SearchResults from "../../SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
  };

  componentDidMount() {
    API.getRandomUser().then((res) => {
      console.log(res.data.results);
      const mapped = res.data.results.map((x) => ({
        first: x.name.first,
        last: x.name.last,
        thumbnail: x.picture.thumbnail,
      }));

      this.setState({ results: mapped, filtered: mapped });
    });
  }

  handleInputChange = ({ target }) => {
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = target;
    this.setState({ [name]: value }, this.filterSearch);
  };

  filterSearch = () => {
    // var text = "dog"
    // var other = text
    // other = "cat";
    
    this.setState({
      filtered: this.state.results.filter((x) => {
        const y = { ...x };
        delete y.thumbnail;
        const values = Object.values(y).toString().toLowerCase();
        return values.includes(this.state.search.toLowerCase());
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Search</h1>
        <SearchForm
          handleInputChange={this.handleInputChange}
          search={this.state.search}
        />

        <div className="row">
          <SearchResults results={this.state.filtered} />
        </div>
      </div>
    );
  }
}

export default Search;
