import { Table, Column, Cell, HeaderCell } from "rsuite-table";
import React from "react"

class RTable extends React.Component {
  constructor(props) {
    super(props);
    const data = props.employees
    this.state = {
      addColumn: false,
      data
    };
    this.handleSortColumn = this.handleSortColumn.bind(this);
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
            <Cell>{rowData => rowData.dob.date}</Cell>
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
  