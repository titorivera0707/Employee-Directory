import { Table, Column, Cell, HeaderCell } from "rsuite-table";
import React from "react"

const RTable = (props) => {
    const [fakeDatum] = props.employees;

    function getData() {
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
      
    function handleSortColumn(sortColumn, sortType) {
        this.setState({
          loading: true
        });
    }
  
    return (
      <Table data={props.employees} 
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
          <HeaderCell>First Name</HeaderCell>
          <Cell>{rowData => rowData.name.first}</Cell>
        </Column>
        <Column width={150} align="center" sortable fixed resizable>
          <HeaderCell>Last Name</HeaderCell>
          <Cell>{rowData => rowData.name.last}</Cell>
        </Column>
        <Column width={200} align="center" sortable fixed resizable>
          <HeaderCell>Gender</HeaderCell>
          <Cell dataKey="gender" />
        </Column>
        <Column width={300} align="center" sortable={true} fixed resizable>
          <HeaderCell>Birthday</HeaderCell>
          <Cell>{rowData => rowData.dob.date}</Cell>
        </Column>
        <Column width={300} align="center" sortable fixed resizable>
          <HeaderCell>Phone Number</HeaderCell>
          <Cell dataKey="phone" />
        </Column>
        <Column width={200} align="center" sortable fixed resizable>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    );
  };

  export default RTable
  