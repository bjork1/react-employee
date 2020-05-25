import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
import Tabletime from "./components/next/next";
//import MyComponent from "./components/Table";
//import Search from "./components/Search";
//import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
//import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// const genderType = {
//   0: "Girl",

//   1: "Boy",
// };
// function enumFormatter(cell, row, enumObject) {
//   return enumObject[cell];
// }

// function imageFormatter(cell, row) {
//   return <img style={{ width: 75 }} src={cell} />;
// }

class App extends Component {
  //   componentDidMount() {
  //   fetch('./employees.json')
  // .then((response) => response.json())
  // .then((findresponse)=>{
  //   console.log(findresponse.gender)
  //   this.setState({
  //     data:findresponse.gender,
  //   })
  // })
  // }
  // componentDidMount() {
  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           results: result.results,
  //         });
  //       },
  //       Note: it's important to handle errors here
  //       instead of a catch() block so that we don't swallow
  //       exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error,
  //         });
  //       }
  //     );
  //  }

  constructor(props) {
    super(props);
    // Manage the sort state in your application
    this.state = {
      sortName: undefined,
      sortOrder: undefined,
      // error: null,
      isLoaded: false,
      apiResult: [],
      apiFirstName: [],
    };
    this.onSortChange = this.onSortChange.bind(this);
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          apiResult: result.results,
        });
      });

    this.setState({
      apiFirstName: this.state.apiResult.name,
    });
  }

  // this.setState({ employees: findresponse });

  // const system = [];
  // for (let i = 0; i < 10; i++) {
  //   system.push({
  //     "first": this.results.name.first
  //   });
  // }
  //this.state = {system};
  // this.state = {
  //   sortName: undefined,
  //   sortOrder: undefined,
  //   error: null,
  //   isLoaded: false,
  //   results: []
  // };
  // this.onSortChange = this.onSortChange.bind(this);

  onSortChange(sortName, sortOrder) {
    this.setState({
      sortName,
      sortOrder,
    });
  }

  render() {
    //console.log(this.state.apiResult[0].gender);

    const options = {
      sortName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      onSortChange: this.onSortChange,
    };

    // results.map(item => (
    //        <li key={item.email}>
    //          {item.email} {item.gender} {item.login.username}
    //        </li>
    //      ))}

    // [{
    //   "first": this.gender
    // }]

    return (
      <Wrapper>
        <Title></Title>
        <Tabletime/>
        {/* <BootstrapTable
          data={this.state.apiResult}
          version="4"
          options={options}
        > */}
          {/* <TableHeaderColumn dataField='{name: {last}}' dataFormat={imageFormatter}>
            Photo
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField= '{name: {first}'
            filter={{ type: "TextFilter", delay: 1000 }}
            dataSort={true}
          >
            First Name
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='{name: {last}}'
            filter={{ type: "TextFilter", delay: 1000 }}
            isKey
            dataSort={true}
          >
            Last Name
          </TableHeaderColumn>

          <TableHeaderColumn
            dataField='name: {last}'
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Email
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField='name: {last}'
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Birthday
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="phone"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Phone Number
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="gender"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            Gender
          </TableHeaderColumn> */}
        {/* </BootstrapTable> */}
      </Wrapper>
    );
  }
}

export default App;
