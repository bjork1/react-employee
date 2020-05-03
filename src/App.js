import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
//import EmployeeTable from "./components/Table";
//import Search from "./components/Search";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const genderType = {
  0: "Girl",

  1: "Boy",
};
function enumFormatter(cell, row, enumObject) {
  return enumObject[cell];
}

function imageFormatter(cell, row) {
  return <img style={{ width: 50 }} src={cell} />;
}



class App extends Component {

  constructor(props) {
    super(props);
    // Manage the sort state in your application
    this.state = {
      sortName: undefined,
      sortOrder: undefined
    };
    this.onSortChange = this.onSortChange.bind(this);
  }
  
  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder
    });
  }
  render() {
    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange
    };
    return (
      <Wrapper>
        <Title></Title>
        <BootstrapTable data={employees} version="4" options={ options }>
          <TableHeaderColumn dataField="image" dataFormat={imageFormatter}>
            Photo
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="first"
            filter={{ type: "TextFilter", delay: 1000 }}
            dataSort={ true }
          >
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="last"
            filter={{ type: "TextFilter", delay: 1000 }}
            isKey dataSort={ true }
          >
            Last Name
          </TableHeaderColumn>

          <TableHeaderColumn dataField="position">
            Position
          </TableHeaderColumn>
          <TableHeaderColumn dataField="position">
            Department
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="gender"
            filterFormatted
            dataFormat={enumFormatter}
            formatExtraData={genderType}
            filter={{ type: "SelectFilter", options: genderType }}
          >
            Gender
          </TableHeaderColumn>
        </BootstrapTable>
      </Wrapper>
    );
  }
}

export default App;
