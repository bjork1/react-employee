import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter, multiSelectFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

const selectOptions = {
    'female': 'Female',
    'male': 'Male'
  };

const columns = [
  {
    dataField: "id",
    hidden: true,
  },
  {
    dataField: "picture.medium",
    text: "Image",
    formatter: imageFormatter,
  },
  {
      dataField: "name.last",
      text: "Last Name",
      sort: true,
      filter: textFilter()
    },
  {
      dataField: "name.first",
      text: "First Name",
      sort: true,
      filter: textFilter()
    },
  {
    dataField: "email",
    text: "Email",
    sort: true,

    filter: textFilter(),
  },
  {
    dataField: "dob.age",
    text: "Age",
    sort: true,
  },
  {
    dataField: "gender",
    text: "Gender",
    filter: multiSelectFilter({
        options: selectOptions
      })
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
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          apiData: result.results,
        });
      });
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
    return (
      <BootstrapTable
        keyField="name"
        data={this.state.apiData}
        columns={columns}
        filter={filterFactory()}
      />
    );
  }
}
export default TableTime;
