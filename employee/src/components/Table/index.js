import React from "react";
//import "./style.css";

function EmployeeTable(props) {

   
  render (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">

      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Birthday</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
  
</table>

<tbody>
                  <tr>
                    <th scope="row">{props.name}</th>
                    <td>{props.email}</td>
                    <td>{props.birthday}</td>
                    <td>{props.phone}</td>
                  </tr>
                </tbody>

        
      </div>
     
    </div>
  );
}

export default EmployeeTable;