import React from "react"
import SearchName from "../components/SearchName"

class Home extends Component {


    render() {
        return (
            <div>
                <SearchName 
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                />
            </div>
        )
    }
}

export default Home