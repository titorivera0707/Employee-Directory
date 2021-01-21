import React, { Component } from "react";
import SearchName from "../components/SearchName"
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
          .then(res=> {
            this.setState({ employees: res.data.results.map((employee)=> {
              return{
                ...employee,
                name: employee.name.last + ", " + employee.name.first,
                firstName: employee.name.first,
                lastName: employee.name.last
              }
            })
            });
          })
        
          // .then(res => this.setState({ employees: data }))
          .catch(err => console.log(err));
      }
    
      handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
      // handleFormSubmit = event => {
      //   event.preventDefault();
      //       this.setState({ results: res.data.message, error: "" });
      //     }

    render() {
        return (
            <div>
                <SearchName 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                />
                <RTable employees={this.state.employees}/>
            </div>
        )
    }
}

export default Home