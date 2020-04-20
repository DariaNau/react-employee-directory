import API from "../../utils/API";
import React, { Component } from "react";
import SearchForm from "../../components/SearchForm/index";
import SearchResults from "../../components/SearchResults/index";
import formatDate from "../../utils/Date";
import Container from "../../components/Container/index";
import Row from "../../components/Row/index";
import Col from "../../components/Col/index";
import Jumbotron from "../../components/Jumbotron.jsx";

// 1 - SET STATE OBJECT WITH ALL NEEDED VARIABLES
class Search extends Component {
  state = {
    order: "ASC",
    // an empty string for search input to be stored at
    search: "",
    // an empty array for results from API call to be stored at on page load
    results: [],
    // another empty array to store only filtered results of whatever is entered or deleted from search string
    filtered: [],
  };

  // 2 - ON PAGE LOAD RUN THIS FUNCTION

  componentDidMount() {
    API.getRandomUser().then((res) => {
      console.log(res.data.results);
      // mapping to get only relevant data from the call
      const mappedRes = res.data.results.map((apiData) => ({
        first: apiData.name.first,
        last: apiData.name.last,
        thumbnail: apiData.picture.large,
        email: apiData.email,
        phone: apiData.phone,
        dob: formatDate(apiData.dob.date),
      }));
      this.setState({
        results: mappedRes,
        filtered: mappedRes,
      });
    });
  }

  // 3- IF THERE IS AN INPUT CHANGE RUN THIS FUNCTION

  handleInputChange = ({ target }) => {
    //Getting the value and name of the input which triggered the change
    // by deconstructing the object: const name = event.target.name and const value = event.target.value;
    const { name, value } = target;
    // 1st update the input's state, then run filterSearch function to update results right when the input is being changed
    this.setState({ [name]: value }, this.filterSearch);
  };

  filterSearch = () => {
    // var text = ["dog"]
    // var other = [...text]
    // other.push("cat")
    // console.log(other, text)
    this.setState({
      filtered: this.state.results.filter((searchRes) => {
        // since we don't want our img urls to be included in search we can delete that key from our searchRes array
        // to achieve that we make a copy of searchRes so we don't permanently delete the thumbnails from our results when we change the value of user input
        const searchRes2 = {
          ...searchRes,
        };
        delete searchRes2.thumbnail;
        delete searchRes2.email;
        // returning (and setting State to) the values from results object that include whatever is in user input
        const values = Object.values(searchRes2).toString().toLowerCase();
        return values.includes(this.state.search.toLowerCase());
      }),
    });
  };

  sortBy = (key) => {
    let sorted;
    if (this.state.order === "ASC") {
      sorted = this.state.filtered.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    } else {
      sorted = this.state.filtered.sort((a, b) => (a[key] < b[key] ? 1 : -1));
    }

    this.setState({
      filtered: sorted,
      order: this.state.order === "ASC" ? "DESC" : "ASC",
    });
  };

  // 4 - RENDER PAGE WITH NECESSARY COMPONENTS AND UPDATED STATE

  render() {
    // console.log(["cat", "dog"]);
    // console.log({ name: "ben", job: "tutor" });
    return (
      <Container>
        <Jumbotron />
        <Row>
          <Col>
            <SearchForm
              handleInputChange={this.handleInputChange}
              search={this.state.search}
            />
            <SearchResults results={this.state.filtered} sortBy={this.sortBy} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
