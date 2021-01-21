import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomEmployee: async function() {
    let res = await axios.get("https://randomuser.me/api/?results=30");
    console.log(res)
    return res

  },
  // getEmployeeGender: async function(gender) {
  //   let res = await axios.get("https://randomuser.me/api/?gender=" +gender);
  //   return res
  // },
  // getEmployeeNames: async function(employee) {
  //   let res = await axios.get("https://randomuser.me/api/?inc="+employee);
  //   return res
  // }
};