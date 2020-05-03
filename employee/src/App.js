import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
//import Title from "./components/Title";
//import EmployeeTable from "./components/Table";
//import Search from "./components/Search";
import employees from "./employees.json";
//import Wrapper from "./components/Wrapper";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// with es5
//var ReactBsTable = require('react-bootstrap-table');

//var BootstrapTable = ReactBsTable.BootstrapTable;
//var TableHeaderColumn = ReactBsTable.TableHeaderColumn;


class App extends Component {
  //  state = {
  //    employees,
  //  };
  

  

  render() {
    return (
      
      
       
      
          <BootstrapTable data = {employees} version='4'>
           
            <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>

<TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Full Name</TableHeaderColumn>

<TableHeaderColumn dataField='occupation'>Occupation</TableHeaderColumn>
            
          </BootstrapTable>
        
     
    );
  }
}

export default App;


//class TextFilter extends React.Component {

//   render() {

//     return (

//       <BootstrapTable data={ products }>

//         <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>

//         <TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Product Name</TableHeaderColumn>

//         <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>

//       </BootstrapTable>

//     );

//   }

// }
