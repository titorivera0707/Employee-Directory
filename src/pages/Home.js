import React, { Component } from "react";
import SearchName from "../components/SearchName"
import Navbar from "../components/Navbar"
import API from "../utils/API"
import RTable from "../components/rTable/index"
import "rsuite-table/dist/css/rsuite-table.css";

class Home extends Component {

    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
      };

    componentDidMount() {
        API.getRandomEmployee()
          .then(res => this.setState({ employees: res.data.results }))
          .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        API.getEmployeeGenders(this.state.search)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
            <div>
                <SearchName 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                />
                <Navbar />
                <RTable employees={this.state.employees}/>
            </div>
        )
    }
}

export default Home