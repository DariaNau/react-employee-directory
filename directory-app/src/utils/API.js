import axios from "axios";

// Export an object containing methods we'll use for accessing the API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=10");
  }
};
