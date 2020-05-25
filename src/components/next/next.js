import React, {Component} from "react";
import BootstrapTable from "react-bootstrap-table-next";



const columns = [
    {
      dataField: "id",
      hidden: true,
    },
    {
        dataField: "picture.medium",
        text: "Image",
        formatter: imageFormatter
      },
    {
        dataField: "name.last",
        text: "Last Name",
      },
    {
        dataField: "name.first",
        text: "First Name",
      },
      {
        dataField: "email",
        text: "Email",
      },
      {
        dataField: "dob.age",
        text: "Age",
      },
    {
      dataField: "gender",
      text: "Gender",
    },
  ];
function imageFormatter(cell, row) {
  return <img style={{ width: 100 }} src={cell} />;
}
  
class TableTime extends Component {

constructor(props) {
    super(props);
    this.state = {
        isLoaded: false,
        apiData: [],
        //apiGender: []
    }
    
}

componentDidMount() {
fetch("https://randomuser.me/api/?results=20")
  .then((res) => res.json())
  .then((result) => {
    this.setState({
        isLoaded: true,
        apiData: result.results
    })
    })
    // this.setState({
    //     apiGender: this.state.gender,
    //   });
}

//   res.json())
//   .then((result) => {
//     this.setState({
//       isLoaded: true,
//       apiResult: result.results,
//     });
//   });

// this.setState({
//   apiFirstName: this.state.apiResult.name,
// });



render() {
    console.log(this.state.apiData);
    return(
<BootstrapTable keyField="name" data={this.state.apiData} columns={columns} />
       
    )
}
}
export default TableTime;
