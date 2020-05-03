import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
//import EmployeeTable from "./components/Table";
//import Search from "./components/Search";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class App extends Component {

  

  

  render() {
    return (
      
      
       
      <Wrapper>
        <Title></Title>
          <BootstrapTable data = {employees} version='4'>
           
            <TableHeaderColumn dataField='id' isKey>ID</TableHeaderColumn>

<TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 } }>Full Name</TableHeaderColumn>

<TableHeaderColumn dataField='occupation'>Occupation</TableHeaderColumn>
            
          </BootstrapTable>

          </Wrapper>
        
     
    );
  }
}

export default App;
