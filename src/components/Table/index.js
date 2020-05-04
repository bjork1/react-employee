import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, results } = this.state;

    

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        
        <BootstrapTable data={system} version="4" options={ options }>
        {/* <TableHeaderColumn dataField="image" dataFormat={imageFormatter}>
          Photo
        </TableHeaderColumn> */}
        <TableHeaderColumn
          dataField="first"
          filter={{ type: "TextFilter", delay: 1000 }}
          dataSort={ true } isKey
        >
          First Name
        </TableHeaderColumn>
        {/* <TableHeaderColumn
          dataField="last"
          filter={{ type: "TextFilter", delay: 1000 }}
          isKey dataSort={ true }
        >
          Last Name
        </TableHeaderColumn> */}

        {/* <TableHeaderColumn dataField="position" dataSort={ true } filter={{ type: "TextFilter", delay: 1000 }}>
          Position
        </TableHeaderColumn>
        <TableHeaderColumn dataField="position" dataSort={ true } filter={{ type: "TextFilter", delay: 1000 }}>
          Department
        </TableHeaderColumn> */}
        {/* <TableHeaderColumn
          dataField="gender"
          filterFormatted
          dataFormat={enumFormatter}
          formatExtraData={genderType}
          filter={{ type: "SelectFilter", options: genderType }}
        >
          Gender
        </TableHeaderColumn> */}
      </BootstrapTable>
        // <ul>
        //   {results.map(item => (
        //     <li key={item.email}>
        //       {item.email} {item.gender} {item.login.username}
        //     </li>
        //   ))}
        // </ul>


        
      );
    }
  }
}

export default MyComponent;
