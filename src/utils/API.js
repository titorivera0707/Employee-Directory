import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: function() {
    return axios.get("https://randomuser.me/api/?results=100");
  },
  getEmployeeGender: function(breed) {
    return axios.get("https://randomuser.me/api/?gender="+gender);
  },
  getEmployeeNames: function() {
    return axios.get("https://randomuser.me/api/?inc="+employee);
  }
};
