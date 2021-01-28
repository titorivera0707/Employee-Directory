import { Table, Column, Cell, HeaderCell } from "rsuite-table";
import React from "react"
import API from "../../utils/API"

class RTable extends React.Component {
  constructor(props) {
    super(props);
    const data = this.getEmployees
    this.state = {
      addColumn: false,
      data
    };
    this.handleSortColumn = this.handleSortColumn.bind(this);
  }

  componentDidMount() {
    this.getEmployees()
  }

  componentDidUpdate() {
    
  }

  getEmployees() {
    API.getRandomEmployee()
    .then(res=> {
      this.setState({ data: res.data.results.map((employee)=> {
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

    getData() {
        const { data, sortColumn, sortType } = this.state;
    
        if (sortColumn && sortType) {
          return data.sort((a, b) => {
            let x = a[sortColumn];
            let y = b[sortColumn];
            if (typeof x === 'string') {
              x = x.charCodeAt();
            }
            if (typeof y === 'string') {
              y = y.charCodeAt();
            }
            if (sortType === 'asc') {
              return x - y;
            } else {
              return y - x;
            }
          });
        }
        return data;
      }
      
      handleSortColumn(sortColumn, sortType) {
        this.setState({
          loading: true
        });
        setTimeout(() => {
          this.setState({
            sortColumn,
            sortType,
            loading: false
          });
        }, 500);
      }

    render(){
  
      return (
        <Table data={this.props.employees} 
        height={420}
        data={this.getData()}
        sortColumn={this.state.sortColumn}
        sortType={this.state.sortType}
        onSortColumn={this.handleSortColumn}
        loading={this.state.loading}
        onRowClick={data => {
          console.log(data);
        }}>
          <Column width={150} align="center" sortable fixed resizable>
            <HeaderCell>Name</HeaderCell>
            <Cell dataKey = "name"></Cell>
          </Column>
          <Column width={200} align="center" sortable fixed resizable>
            <HeaderCell>Gender</HeaderCell>
            <Cell dataKey="gender" />
          </Column>
          <Column width={300} align="center" fixed resizable>
            <HeaderCell>Birthday</HeaderCell>
            <Cell>{rowData => rowData.dob.date.split("T")[0]}</Cell>
          </Column>
          <Column width={300} align="center" fixed resizable>
            <HeaderCell>Phone Number</HeaderCell>
            <Cell dataKey="phone" />
          </Column>
          <Column width={200} align="center" sortable fixed resizable>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>
        </Table>
      );
    }
  };

  export default RTable
  