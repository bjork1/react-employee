import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
//import MyComponent from "./components/Table";
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
  return <img style={{ width: 75 }} src={cell} />;
}







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
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
//       (error) => {
//         this.setState({
//           isLoaded: true,
//           error,
//         });
//       }
//     );
// }



  constructor(props) {
    super(props);
    // Manage the sort state in your application
    this.state = {
        sortName: undefined,
        sortOrder: undefined,
        // error: null,
        // isLoaded: false,
        // results: []
      };
       this.onSortChange = this.onSortChange.bind(this);
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

          <TableHeaderColumn dataField="email" dataSort={ true } filter={{ type: "TextFilter", delay: 1000 }}>
            Email
          </TableHeaderColumn>
         <TableHeaderColumn dataField="birthday" dataSort={ true } filter={{ type: "TextFilter", delay: 1000 }}>
            Birthday
          </TableHeaderColumn> 
          <TableHeaderColumn dataField="phone" dataSort={ true } filter={{ type: "TextFilter", delay: 1000 }}>
            Phone Number
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
