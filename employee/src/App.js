import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import Title from "./components/Title";
//import EmployeeTable from "./components/Table";
//import Search from "./components/Search";
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


const genderType = {

  0: 'Girl',

  1: 'Boy'

};
function enumFormatter(cell, row, enumObject) {

  return enumObject[cell];

}

function imageFormatter(cell, row){
  return (<img style={{width:50}} src={cell}/>);
}

class App extends Component {

  

  

  render() {
    return (
      
      
       
      <Wrapper>
        <Title></Title>
          <BootstrapTable data = {employees} version='4'>
           
          <TableHeaderColumn dataField='image' dataFormat={imageFormatter}>Photo</TableHeaderColumn>
<TableHeaderColumn dataField='name' filter={ { type: 'TextFilter', delay: 1000 }  } isKey>Full Name</TableHeaderColumn>


<TableHeaderColumn dataField='occupation'>Occupation</TableHeaderColumn>
<TableHeaderColumn dataField='gender' filterFormatted dataFormat={ enumFormatter }

            formatExtraData={ genderType } filter={ { type: 'SelectFilter', options: genderType } }>Gender</TableHeaderColumn>
            
          </BootstrapTable>

          </Wrapper>
        
     
    );
  }
}

export default App;
